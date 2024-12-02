import Parse from 'args-parser'
import { loadConfig } from "./config";
import path from 'path';
import * as youdao from './youdao';
import { initDB } from './entity';

const args = Parse(process.argv)
let workDir = args.dir || process.cwd();
const config = loadConfig(path.join(workDir, 'config.yaml'));


async function main() {
    await initDB(config.workDir);
    // await youdao.syncBookToLocal();
    await youdao.syncToLocal();
}

main();
