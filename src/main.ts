import Parse from 'args-parser'
import { loadConfig } from "./config";
import path from 'path';
import * as youdao from './youdao';
import { initDB } from './entity';
import { ox10Lookup } from './mdict';
import * as anki from './anki';

const args = Parse(process.argv)
let workDir = args.dir || process.cwd();
const config = loadConfig(path.join(workDir, 'config.yaml'));


async function main() {
    await initDB(config.workDir);
    // await youdao.syncToLocal();
    // await anki.addOX10Model() //先添加模型
    anki.syncOX10ModelJs();
    const oxWord = await ox10Lookup('ask');
    // return
    const ankiRep = await anki.addToDeck(config.anki.defaultDeck, oxWord.toAnkiFields());
    if(ankiRep.error) {
        console.error(ankiRep.error);
    }
}

main();
