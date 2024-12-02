import {EntitySchema} from "typeorm";

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

export const Word = new EntitySchema<IWord>({
  name: 'youdao_word',
  columns: {
    id: {type: 'varchar', length: 32, primary: true},
    bookId: {type: 'varchar', length: 32,},
    word: {type: 'varchar', length: 255,},
    lanFrom: {type: 'text'},
    phonetic: {type: 'text'},
    trans: {type: 'text'},
    type: {type: 'int'},
    clientCreateTime: {type: 'datetime'},
    clientModifiedTime: {type: 'datetime'},
    toAnkiTime: {type: 'datetime', nullable: true},
  },
  indices: [
    {      name: 'idx_word',      columns: ['word']    },
    {    name: 'idx_book_id',    columns: ['bookId']  },
    {name: 'idx_create_time', columns: ['clientCreateTime']},
    {name: 'idx_to_anki_time', columns: ['toAnkiTime']}
  ]
})

// class Repo {
//     get Book() {
//         return globalDataSource.getRepository(Book);
//     }
//     get Word() {
//         return globalDataSource.getRepository(Word);
//     }
// }

// export const repo = new Repo();