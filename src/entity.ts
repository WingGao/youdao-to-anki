import path from "path";
import {DataSource} from "typeorm";
import {Book, Word} from "./youdao/entity";
import {EudicBook, EudicWord} from "./eudic";

export let globalDataSource: DataSource

export async function initDB(workDir: string) {
  globalDataSource = new DataSource({
    type: 'better-sqlite3',
    database: path.join(workDir, 'local.db'),
    entities: [Book, Word, EudicBook, EudicWord],
    synchronize: true,
    logging: true,
    extra: {
      pragma: {
        foreign_keys: 'OFF'
      }
    }
  });
  await globalDataSource.initialize()
}
