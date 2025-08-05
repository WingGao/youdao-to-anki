import Parse from 'args-parser'
import {getLogger, loadConfig} from "./config";
import path from 'path';
import * as youdao from './youdao';
import {globalDataSource, initDB} from './entity';
import {ox10Lookup, ox10LookupFile} from './mdict';
import * as anki from './anki';
import * as _ from 'lodash-es'
import {Eudic, EudicWord} from "./eudic";
import {listAllWords, markWordToAnki, Word} from "./youdao/entity";

const args = Parse(process.argv)
let workDir = args.dir || process.cwd();
const config = loadConfig(path.join(workDir, 'config.yaml'));
const logger = getLogger('main');


async function syncWordsToAnki(words: any[], markWordSynced?: (wordId: any) => Promise<any>) {
  for (const word of words) {
    if (word.word.indexOf(' ') != -1) {
      logger.info(`${word.word} 包含空格，跳过`);
      continue;
    }

    const oxWord = await ox10Lookup(word.word);
    if (oxWord.word == null || oxWord.word.toLowerCase() != word.word.toLowerCase()) {
      logger.info(`${word.word} 与 ox10 查词 ${oxWord.word} 结果不一致，跳过`);
    } else {
      //TODO 检查anki是否存在相同的卡片
      const ankiRep = await anki.addToDeck(config.anki.defaultDeck, await oxWord.toAnkiFields());
      if (ankiRep.error != null) throw new Error(ankiRep.error)
    }

    if (markWordSynced) {
      await markWordSynced(word.id);
    }
  }
}

async function main() {
  await initDB(config.workDir);
  const eudic = new Eudic(config.eudic)
  if (_.size(config.youdao.cookie) > 0) {
    await youdao.syncToLocal(); //将有道词典的单词同步到本地
  }
  if (_.size(config.eudic.authorization) > 0) {
    await eudic.syncToLocal();
  }
  return
  // await anki.addOX10Model() //先添加模型
  // await anki.syncOX10ModelJs();  //先添加模型

  // 同步到anki
  const wordTables = [Word, EudicWord]
  for (const wordTable of wordTables) {
    const words = await listAllWords(globalDataSource, wordTable);
    await syncWordsToAnki(words, id => markWordToAnki(globalDataSource, wordTable, id));
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
