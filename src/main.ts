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
import {loadLocalWords} from "./localwords";

const args = Parse(process.argv)
let workDir = args.dir || process.cwd();
const config = loadConfig(path.join(workDir, 'config.yaml'));
const logger = getLogger('main');

export interface ISyncAnkiOpts {
  deck?: string
  markWordSynced?: (wordId: any) => Promise<any>
}

async function syncWordsToAnki(words: Array<{ id?: any, word: string }>, opts: ISyncAnkiOpts = {}) {
  const total = words.length;
  const batchSize = 10;
  const totalBatches = Math.ceil(total / batchSize);

  // 过滤掉包含空格的单词
  const validWords = words
    .map((word, index) => ({ ...word, originalIndex: index }))
    .filter((word) => {
      const progress = `[${word.originalIndex + 1}/${total}]`;
      if (word.word.indexOf(' ') != -1) {
        logger.info(`${progress} ${word.word} 包含空格，跳过`);
        return false;
      }
      return true;
    });

  // 分批处理
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
    const start = batchIndex * batchSize;
    const end = Math.min(start + batchSize, validWords.length);
    const batch = validWords.slice(start, end);

    if (batch.length === 0) continue;

    // 批量检查 Anki 中是否存在
    const wordsToCheck = batch.map(w => w.word);
    const existMap = await anki.checkNoteExist(wordsToCheck);

    // 过滤掉已存在的单词
    const wordsToLookup: Array<typeof batch[0]> = [];
    for (const word of batch) {
      const progress = `[${word.originalIndex + 1}/${total}]`;
      if (existMap.get(word.word)) {
        logger.warn(`${progress} ${word.word} 已存在，跳过`);

        if (opts.markWordSynced && word.id) {
          await opts.markWordSynced(word.id);
        }
      } else {
        wordsToLookup.push(word);
      }
    }

    if (wordsToLookup.length === 0) {
      // 所有单词都已存在，继续下一批
      continue;
    }

    // 批量查询 ox10
    const lookupResults = await Promise.all(
      wordsToLookup.map(word =>
        ox10Lookup(word.word)
          .then(oxWord => ({ word, oxWord }))
          .catch(err => {
            const progress = `[${word.originalIndex + 1}/${total}]`;
            logger.error(`${progress} 查询 ${word.word} 失败: ${err}`);
            return { word, oxWord: null };
          })
      )
    );

    // 处理查询结果
    for (const { word, oxWord } of lookupResults) {
      const progress = `[${word.originalIndex + 1}/${total}]`;

      if (oxWord == null || oxWord.word == null || oxWord.word.toLowerCase() != word.word.toLowerCase()) {
        logger.info(`${progress} ${word.word} 与 ox10 查词 ${oxWord?.word || '无结果'} 结果不一致，跳过`);

        if (opts.markWordSynced && word.id) {
          await opts.markWordSynced(word.id);
        }
        continue;
      }

      // 检查 oxWord 是否已存在
      const oxWordExistMap = await anki.checkNoteExist([oxWord.word]);
      if (oxWordExistMap.get(oxWord.word)) {
        logger.warn(`${progress} ${oxWord.word} 已存在，跳过`);

        if (opts.markWordSynced && word.id) {
          await opts.markWordSynced(word.id);
        }
        continue;
      }

      // 添加到 Anki
      const deck = opts.deck || config.anki.defaultDeck;
      const ankiRep = await anki.addToDeck(deck, await oxWord.toAnkiFields());
      if (ankiRep.error != null) {
        switch (ankiRep.error) {
          case "cannot create note because it is a duplicate":
            break;
          default:
            throw new Error(ankiRep.error);
        }
      }

      if (opts.markWordSynced && word.id) {
        await opts.markWordSynced(word.id);
      }
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
  // return
  // await anki.addOX10Model() //先添加模型
  // await anki.syncOX10ModelJs();  //先添加模型

  // 同步软件单词到anki
  const wordTables = [Word, EudicWord]
  for (const wordTable of wordTables) {
    const words = await listAllWords(globalDataSource, wordTable);
    await syncWordsToAnki(words, {markWordSynced: id => markWordToAnki(globalDataSource, wordTable, id)});
  }
  return
  // 同步本地文件 到anki
  const localWords = await loadLocalWords(path.join(workDir, 'words.txt'));
  await syncWordsToAnki(localWords, {deck: config.anki.localWordsDeck});

  // //TODO 拆解ox10的Idioms/Phrasal Verbs
  // const oxWord = await ox10Lookup('ask');
  // // return
  // const ankiRep = await anki.addToDeck(config.anki.defaultDeck, await oxWord.toAnkiFields());
  // if(ankiRep.error) {
  //     console.error(ankiRep.error);
  // }
}

main();
