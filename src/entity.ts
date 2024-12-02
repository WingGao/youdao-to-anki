import path from "path";
import { DataSource } from "typeorm";
import { Book, Word } from "./youdao/entity";

export let globalDataSource : DataSource

export async function initDB(workDir: string) {
    globalDataSource = new DataSource({
        type: 'better-sqlite3',
        database: path.join(workDir, 'local.db'),
        entities: [Book, Word],
        synchronize: true,
        logging: true
    });
    await globalDataSource.initialize()
}