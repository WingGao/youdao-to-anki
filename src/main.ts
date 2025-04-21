import Parse from 'args-parser'
import {getLogger, loadConfig} from "./config";
import path from 'path';
import * as youdao from './youdao';
import {initDB} from './entity';
import {ox10Lookup, ox10LookupFile} from './mdict';
import * as anki from './anki';

const args = Parse(process.argv)
let workDir = args.dir || process.cwd();
const config = loadConfig(path.join(workDir, 'config.yaml'));
const logger = getLogger('main');


async function main() {
  await initDB(config.workDir);
  await youdao.syncToLocal(); //将有道词典的单词同步到本地
  // await anki.addOX10Model() //先添加模型
  await anki.syncOX10ModelJs();  //先添加模型

  // 有道->anki
  // return
  const words = await youdao.listAllWords(true);
  for (const word of words) {
    if (word.word.indexOf(' ') != -1) {
      logger.info(`${word.word} 包含空格，跳过`);
      continue;
    }

    const oxWord = await ox10Lookup(word.word);
    if (oxWord.word == null || oxWord.word.toLowerCase() != word.word.toLowerCase()) {
      logger.info(`${word.word} 与 ox10 查词 ${oxWord.word} 结果不一致，跳过`);
    } else {
      const ankiRep = await anki.addToDeck(config.anki.defaultDeck, await oxWord.toAnkiFields());
      if(ankiRep.error != null) throw new Error(ankiRep.error)
    }
    await youdao.markWordToAnki(word.id);
  }
  // //TODO 拆解ox10的Idioms/Phrasal Verbs
  // const oxWord = await ox10Lookup('ask');
  // // return
  // const ankiRep = await anki.addToDeck(config.anki.defaultDeck, await oxWord.toAnkiFields());
  // if(ankiRep.error) {
  //     console.error(ankiRep.error);
  // }
}

main();
