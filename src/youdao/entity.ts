import {DataSource, EntitySchema, IsNull} from "typeorm";
import {EntitySchemaOptions} from "typeorm/entity-schema/EntitySchemaOptions";

export interface IBook {
  id: string;
  name: string;
}

export const Book = new EntitySchema<IBook>({
  name: 'youdao_book',
  columns: {
    id: {type: 'text', primary: true},
    name: {type: 'text'},
  }
})

export interface IWord {
  id: string;
  bookId: string;
  word: string;
  lanFrom: string;
  phonetic: string;
  trans: string;
  type: number;
  clientCreateTime: Date;
  clientModifiedTime: Date;
  toAnkiTime: Date;
}

export const getWordEntitySchemaOptions = (tableName: string): EntitySchemaOptions<IWord> => ({
  name: tableName,
  columns: {
    id: {type: 'varchar', length: 32, primary: true},
    bookId: {type: 'varchar', length: 32,},
    word: {type: 'varchar', length: 255,},
    lanFrom: {type: 'text', nullable: true},
    phonetic: {type: 'text', nullable: true},
    trans: {type: 'text'},
    type: {type: 'int', nullable: true},
    clientCreateTime: {type: 'datetime'},
    clientModifiedTime: {type: 'datetime'},
    toAnkiTime: {type: 'datetime', nullable: true},
  },
  indices: [
    {name: `idx_${tableName}_word`, columns: ['word']},
    {name: `idx_${tableName}_book_id`, columns: ['bookId']},
    {name: `idx_${tableName}_create_time`, columns: ['clientCreateTime']},
    {name: `idx_${tableName}_to_anki_time`, columns: ['toAnkiTime']}
  ]
})


export const Word = new EntitySchema<IWord>(getWordEntitySchemaOptions('youdao_word'))

/**
 * 标记单词为已同步到anki
 */
export async function markWordToAnki(ds: DataSource, tableCls: EntitySchema<IWord>, id: string) {
  return await ds.getRepository(tableCls).update({id}, {toAnkiTime: new Date()});
}

/**
 * 获取所有单词
 * @param ds
 * @param tableCls
 * @param notAnki true=获取未同步到anki的
 */
export async function listAllWords(ds: DataSource, tableCls: EntitySchema<IWord>, notAnki = false) {
  const wordRepo = ds.getRepository(tableCls);
  let opt = {}
  if (notAnki) opt = {toAnkiTime: IsNull()}
  const words = await wordRepo.findBy(opt);
  return words;
}

