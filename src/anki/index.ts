import axios from "axios";
import { getConfig } from "../config";
import { getLogger } from "log4js";
import path from "path";
import fs from 'fs';

const logger = getLogger('anki');
logger.level = 'debug';

export interface IAnkiNoteFields {
    modelName?: string;
    word: string;
    phonetic: string;
    audio: string;
    definition: string;
}

export interface IAnkiRepBase {
    result: any;
    error?: string;
}

function getClient(){
    // https://foosoft.net/projects/anki-connect/
    return axios.create({
        baseURL: getConfig().anki.connect,
    });
}

async function post(params) {
    const rep = await getClient().post('/', params);
    return rep.data as IAnkiRepBase;
}

function getMediaDir() {
    let p = path.join(getConfig().anki.dataDir, 'collection.media');
    if(!fs.existsSync(p)) {
        throw new Error(`anki.dataDir 不存在: ${p}`);
    }
    return p;
}

export function syncOX10ModelJs() {
    const files = ['ox10_main.js', 'ox10_main.css'];
    for(const file of files) {
        fs.copyFileSync(path.join(getConfig().assertsDir, file), path.join(getMediaDir(), file));
    }
}
/**
 * 添加OX10模型
 */
export async function addOX10Model(){
    const res = await post({
        "action": "createModel",
        "version": 6,
        "params": {
            "modelName": getConfig().anki.defaultNoteModel,
            "inOrderFields": ["word", "phonetic", "definition", "audio"],
            "css": '@import url("./ox10_main.css");',
            "isCloze": false,
            "cardTemplates": [
                {
                    "Name": "正面",
                    "Front": "<div>{{word}}</div>",
                    "Back": `<oaldpe class="oaldpe">{{definition}}</oaldpe> <script type="text/javascript" src="ox10_main.js"></script>`
                }
            ]
        }
    });
    if(res.error == null) { //移动css
        syncOX10ModelJs();
    }else {
        throw new Error(`添加OX10模型失败: ${res.error}`);
    }
    return res.result;
}

export async function addToDeck(deckName:string, note:IAnkiNoteFields) {
    logger.info(`addToDeck ${deckName} ${note.word}`);
    const res =await getClient().post('/',{
        "action": "addNote",
        "version": 6,
        "params": {
            "note": {
                "deckName":deckName,
                "modelName": note.modelName || getConfig().anki.defaultNoteModel,
                "fields": {
                    "word": note.word,
                    "phonetic": note.phonetic,
                    "definition": note.definition,
                },
                "options": {
                    "allowDuplicate": false,
                    "duplicateScope": "deck",
                },
                // "audio": [{
                //     "url": "https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kanji=猫&kana=ねこ",
                //     "filename": "yomichan_ねこ_猫.mp3",
                //     "skipHash": "7e2c2f954ef6051373ba916f000168dc",
                //     "fields": [
                //         "Front"
                //     ]
                // }],
                // "video": [{
                //     "url": "https://cdn.videvo.net/videvo_files/video/free/2015-06/small_watermarked/Contador_Glam_preview.mp4",
                //     "filename": "countdown.mp4",
                //     "skipHash": "4117e8aab0d37534d9c8eac362388bbe",
                //     "fields": [
                //         "Back"
                //     ]
                // }],
                // "picture": [{
                //     "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/A_black_cat_named_Tilly.jpg/220px-A_black_cat_named_Tilly.jpg",
                //     "filename": "black_cat.jpg",
                //     "skipHash": "8d6e4646dfae812bf39651b59d7429ce",
                //     "fields": [
                //         "Back"
                //     ]
                // }]
            }
        }
    });
    logger.info(`addToDeck ${deckName} ${note.word} res:`, res.data);
    return res.data as IAnkiRepBase;
}
