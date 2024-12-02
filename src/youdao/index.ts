import axios from "axios";
import { getConfig } from "../config";
import Logger from "log4js";
import { globalDataSource } from "../entity";
import { Book, Word } from "./entity";

const logger = Logger.getLogger('youdao');
logger.level = 'debug';

function getClient(){
    return axios.create({
        headers: {
            'User-Agent': 'Youdao Desktop Dict (Windows NT 10.0; WOW64)',
            'Cookie': getConfig().youdao.cookie,
        }
    });
}
/**
 * 将有道词典的单词同步到本地
 * 使用了客户端的接口
 */
export async function syncToLocal() {
    const client = getClient();

    // 获取上次同步时间
    const wordRepo = globalDataSource.getRepository(Word);
    const lastWord = await wordRepo.find({order: {clientCreateTime: 'DESC'},take: 1});
    const lastSyncTime = lastWord[0]?.clientCreateTime?.getTime() || 0;
    const reqBody = {"attend":[],"books":[],"items":[],"tag":lastSyncTime}

    const attendTime = Date.now();
    // 从有道windows客户端抓包获取，单词本->同步
    const { data } = await client.post(`https://dict.youdao.com/wordbook/sync?keyfrom=deskdict.11.0.4.deskdict&attendTime=${attendTime}&compress=0`,'data=' + encodeURIComponent(JSON.stringify(reqBody)));
    if(data.code != 0) throw new Error(`同步单词本失败 ${data.msg}`);
    // 保存book
    const bookRepo = globalDataSource.getRepository(Book);
    await bookRepo.save(data.data.books.map(v=>({id:v.bookId,name:v.bookName})));
    logger.info(`保存单词本 ${data.data.books.length}`);
    // 保存word
    await wordRepo.save(data.data.items.map(v=>({
        id:v.itemId,
        bookId:v.bookId,
        word:v.itemName,
        lanFrom:v.lanFrom,
        phonetic:v.phonetic,
        trans:v.trans,
        type:v.type,
        clientCreateTime: new Date(v.clientCreateTime),
        clientModifiedTime: new Date(v.clientModifiedTime)
    })));
    logger.info(`保存单词 ${data.data.items.length}`);
}
