import axios from "axios";
import {getConfig, getLogger} from "../config";
import {globalDataSource} from "../entity";
import {Book, Word} from "./entity";
import {IsNull} from "typeorm";

const logger = getLogger('youdao');


function getClient() {
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
  const lastWord = await wordRepo.find({order: {clientCreateTime: 'DESC'}, take: 1});
  const lastSyncTime = lastWord[0]?.clientCreateTime?.getTime() || 0;
  const reqBody = {"attend": [], "books": [], "items": [], "tag": lastSyncTime}

  const attendTime = Date.now();
  // 从有道windows客户端抓包获取，单词本->同步
  const {data} = await client.post(`https://dict.youdao.com/wordbook/sync?keyfrom=deskdict.11.0.4.deskdict&attendTime=${attendTime}&compress=0`, 'data=' + encodeURIComponent(JSON.stringify(reqBody)));
  if (data.code != 0) throw new Error(`同步单词本失败 ${data.msg}`);
  // 保存book
  const bookRepo = globalDataSource.getRepository(Book);
  await bookRepo.save(data.data.books.map(v => ({id: v.bookId, name: v.bookName})));
  logger.info(`保存单词本 ${data.data.books.length}`);
  let deleteIds = []
  let saveItems = []
  data.data.items.forEach(v => {
    if (v.isDelete) { //删除的单词
      deleteIds.push(v.itemId)
    } else saveItems.push({
      id: v.itemId,
      bookId: v.bookId,
      word: v.itemName,
      lanFrom: v.lanFrom,
      phonetic: v.phonetic,
      trans: v.trans,
      type: v.type,
      clientCreateTime: new Date(v.clientCreateTime),
      clientModifiedTime: new Date(v.clientModifiedTime)
    })
  })
  // 保存word
  if (saveItems.length > 0) await wordRepo.save(saveItems);
  if (deleteIds.length > 0) await wordRepo.remove(deleteIds.map(v => ({id: v})))
  logger.info(`保存单词 ${data.data.items.length}`);
}

/**
 * 获取所有单词
 * @param notAnki true=获取未同步到anki的
 */
export async function listAllWords(notAnki = false) {
  const wordRepo = globalDataSource.getRepository(Word);
  let opt = {}
  if (notAnki) opt = {toAnkiTime: IsNull()}
  const words = await wordRepo.findBy(opt);
  return words;
}

/**
 * 标记单词为已同步到anki
 * @param id
 * @returns
 */
export async function markWordToAnki(id: string) {
  return await globalDataSource.getRepository(Word).update({id}, {toAnkiTime: new Date()});
}
