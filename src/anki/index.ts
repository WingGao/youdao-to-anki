import axios, {AxiosInstance} from "axios";
import {getConfig} from "../config";
import {getLogger} from "log4js";
import path from "path";
import fs from 'fs';
import {calculateFileMD5} from "../utils/file";
import {defaultTo} from "lodash-es";
import http from 'http';

const logger = getLogger('anki');
logger.level = 'debug';

export interface IAnkiNoteFields {
  modelName?: string;
  word: string;
  phonetic?: string;
  audio?: { name?: string, path: string };
  definition: string;
}

export interface IAnkiRepBase {
  result: any;
  error?: string;
}

let _client: AxiosInstance;

function getClient() {
  // https://foosoft.net/projects/anki-connect/
  if (_client == null) {
    _client = axios.create({
      baseURL: getConfig().anki.connect,
      httpAgent: new http.Agent({
        keepAlive: false, //必要，connect特性
      })
    });
  }
  return _client
}

async function post(params) {
  // (Invoke-RestMethod -Uri http://localhost:8765 -Method Post -Body '{"action": "deckNames", "version": 6}')|ConvertTo-Json -Depth 100
  const rep = await getClient().post('/', params);
  return rep.data as IAnkiRepBase;
}

let _mediaDir: string;

async function getMediaDir() {
  if (_mediaDir == null) {
    const rep = await post({
      "action": "getMediaDirPath",
      "version": 6,
    });
    _mediaDir = rep.result;
  }
  return _mediaDir;
}

/**
 * 同步OX10模型js和css
 * https://docs.ankiweb.net/syncing.html#media 只有替换才能生效
 */
export async function syncOX10ModelJs() {
  const files = ['ox10_main.js', 'ox10_main.css'];
  for (const file of files) {
    fs.copyFileSync(path.join(getConfig().assertsDir, file), path.join(await getMediaDir(), file));
  }
}

/**
 * 添加OX10模型
 */
export async function addOX10Model() {
  const Back = `<oaldpe class="oaldpe">{{definition}}</oaldpe> <script type="text/javascript" src="ox10_main.js"></script>
<div id="py-audio">{{audio}}</div>`
  const templateFront = {
    "Name": "正面",
    "Front": `<div class="center"><h1>{{word}}</h1></div>
<div class="center">{{audio}}</div>`,
    "Back": Back
  }
  const templateAudio = {
    "Name": "发音",
    "Front": `<div class="center">{{audio}}</div>`,
    "Back": Back
  }

  const res = await post({
    "action": "createModel",
    "version": 6,
    "params": {
      "modelName": getConfig().anki.defaultNoteModel,
      "inOrderFields": ["word", "phonetic", "definition", "audio"],
      "css": `@import url("./ox10_main.css");
div.center {
    text-align: center;
};`,
      "isCloze": false,
      "cardTemplates": [
        templateFront,
        // templateAudio,
      ]
    }
  });
  if (res.error == null) { //移动css
    await syncOX10ModelJs();
  } else {
    throw new Error(`添加OX10模型失败: ${res.error}`);
  }
  return res.result;
}

/**
 * 添加卡片到Anki，全局为一
 * @param deckName
 * @param note
 */
export async function addToDeck(deckName: string, note: IAnkiNoteFields) {
  logger.info(`addToDeck ${deckName} ${note.word}`);
  let noteData: any = {
    "deckName": deckName,
    "modelName": note.modelName || getConfig().anki.defaultNoteModel,
    "fields": {
      "word": note.word,
      "phonetic": note.phonetic,
      "definition": note.definition,
    },
    "options": {
      "allowDuplicate": false,
      // "duplicateScope": "deck",
      "duplicateScopeOptions": {
        "checkAllModels": true
      }
    },
  }
  if (note.audio != null) {
    const audio = [{
      "path": note.audio.path,
      "filename": defaultTo(note.audio.name, path.basename(note.audio.path)),
      "fields": ["audio"]
    }]
    noteData.audio = audio;
  }


  const res = await post({
    "action": "addNote",
    "version": 6,
    "params": {
      "note": noteData
    }
  });
  logger.info(`addToDeck ${deckName} ${note.word} res:`, res);
  // 失败 { result: null, error: 'model was not found: OX10_dan' }
  // 成功  {  "result": 1745245947531, "error": null }
  return res as IAnkiRepBase;
}
