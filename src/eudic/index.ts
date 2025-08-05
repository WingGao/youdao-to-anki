/**
 * 欧路单词本
 * 文档： https://my.eudic.net/OpenAPI/Doc_Index
 */
import axios from "axios";
import {EntitySchema} from "typeorm";
import {IBook, IWord, getWordEntitySchemaOptions} from "../youdao/entity";
import {getConfig, getLogger} from "../config";
import {globalDataSource} from "../entity";
import {createHash} from "crypto";

export const EudicBook = new EntitySchema<IBook>({
  name: 'eudic_book',
  columns: {
    id: {type: 'text', primary: true},
    name: {type: 'text'},
  }
})

export const EudicWord = new EntitySchema<IWord>(getWordEntitySchemaOptions('eudic_word'))

export interface IEudicConfig {
  authorization: string;
}

const logger = getLogger('eudic');

export class Eudic {
  config: IEudicConfig;
  client: any;

  constructor(config: IEudicConfig) {
    this.config = config;
    this.client = axios.create({
      headers: {
        'Authorization': config?.authorization,
      }
    });
  }

  /**
   * 将单词本全部同步到本地
   */
  async syncToLocal(){

    // 获取单词本
    const {data: booksResponse} = await this.client.get('https://api.frdic.com/api/open/v1/studylist/category?language=en');
    if (booksResponse.message) {
      throw new Error(`获取单词本失败: ${booksResponse.message}`);
    }

    // 保存单词本到本地
    const bookRepo = globalDataSource.getRepository(EudicBook);
    await bookRepo.save(booksResponse.data.map(book => ({
      id: book.id,
      name: book.name
    })));
    logger.info(`保存单词本 ${booksResponse.data.length} 个`);

    // 获取所有单词本中的单词
    const wordRepo = globalDataSource.getRepository(EudicWord);
    let totalWords = 0;

    for (const book of booksResponse.data) {
      let page = 1;
      let hasMore = true;
      let bookWords = 0;

      while (hasMore) {
        const {data: wordsResponse} = await this.client.get('https://api.frdic.com/api/open/v1/studylist/words', {
          params: {
            category_id: book.id,
            language: 'en',
            page: page,
            page_size: 100
          }
        });

        if (wordsResponse.message) {
          logger.warn(`获取单词本 ${book.name} 的单词失败: ${wordsResponse.message}`);
          break;
        }

        if (!wordsResponse.data || wordsResponse.data.length === 0) {
          hasMore = false;
          break;
        }

        // 转换单词格式
        const words = wordsResponse.data.map(w => ({
          id: createHash('md5').update(w.word).digest('hex'), // 使用单词的MD5作为ID
          bookId: book.id,
          word: w.word,
          lanFrom: 'en',
          phonetic: '',
          trans: w.exp,
          clientCreateTime: new Date(w.add_time),
          clientModifiedTime: new Date(w.add_time)
        }));

        // 每次请求完后立即保存
        await wordRepo.save(words);
        bookWords += words.length;
        totalWords += words.length;
        logger.info(`保存单词本 ${book.name} 第 ${page} 页，${words.length} 个单词`);

        page++;

        // 如果返回的数量小于page_size，说明没有更多数据了
        if (wordsResponse.data.length < 100) {
          hasMore = false;
        }
      }

      logger.info(`单词本 ${book.name} 共保存 ${bookWords} 个单词`);
    }

    logger.info(`总共保存单词 ${totalWords} 个`);
  }
}


