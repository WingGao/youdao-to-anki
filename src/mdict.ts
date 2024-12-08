import { MDD, MDX } from "js-mdict";
import { getConfig } from "./config";
import { globbySync } from "globby";
import { JSDOM } from "jsdom";
import jquery from 'jquery';
import Logger from "log4js";
import { IAnkiNoteFields } from "./anki";
import path from "path";
import fs from 'fs';
const logger = Logger.getLogger('mdict');
logger.level = 'debug';

let ox10:MdictWorker;
class MdictWorker {
    dir:string;
    mdx:MDX
    mdds:MDD[] = []
    constructor(dir:string) {
        this.dir = dir;
        globbySync(['*.mdx', '*.mdd'],{cwd:dir,absolute:true,onlyFiles:true}).forEach(file => {
            if(file.endsWith('.mdx')) {
                this.mdx = new MDX(file);
            } else {
                this.mdds.push(new MDD(file));
            }
        });
    }

    lookup(word:string) {
        const def = this.mdx.lookup(word);
        return def;
    }

    async findFile(filename:string) {
        let resList = await Promise.all(this.mdds.map(mdd => mdd.lookup(filename)));
        return resList.find(res => res);
    }
}

class LookupResult {
    word:string;
    phonetics: { br:string, brAudio:string, us:string, usAudio:string }; // 英式美式发音
    entries: {
        definition:string;
    }[] = [];

    toAnkiFields(): IAnkiNoteFields {
        return {
            word: this.word,
            phonetic: this.phonetics.us,
            // audio: this.phonetics.usAudio,
            definition: this.entries.map(e => e.definition).join('<hr/>'),
        }
    }
}

export function createJqFromSrc(pageSrc:string) {
    let dom = new JSDOM(pageSrc)
    // @ts-ignore
    return jquery(dom.window) as JQueryStatic
}

export async function ox10Lookup(word: string):Promise<LookupResult> {
    if(!ox10) {
        ox10 = new MdictWorker(getConfig().mdict.oald10);
    }
    const def = ox10.lookup(word);
    fs.writeFileSync(path.join(getConfig().workDir, `ox10_${word}.html`), def.definition!!); //测试用
    // 在线样式 https://oalecd10.cp.com.cn/#/desktop/dict
    const $ = createJqFromSrc(def.definition!!);
    const oaldpeJq = $($.find('oaldpe'))
    const res = new LookupResult();
    oaldpeJq.find('.oald-entry-root').each((i,el) => { // 有多个词性
        const $el = $(el);
        if(res.word == null) {
            const topJq = $el.find('.entry > .top-container');
            res.word = topJq.find('h1.headword').text();
            let brJq = topJq.find('.phonetics .phons_br').first();
            let usJq = topJq.find('.phonetics .phons_n_am').first();
            res.phonetics = {
                br: brJq.find('.phon').text().trim(),
                brAudio: brJq.find('a.icon-audio').attr('href'),
                us: usJq.find('.phon').text().trim(),
                usAudio: usJq.find('a.icon-audio').attr('href'),
            }
        }
        // 去除icon
        // $el.find('.audio_play_button').remove();
        // 展开 idioms
        // if (oaldpeConfig.unfoldPhraseSections) {
        //     $content.css('display', 'block');
        //     $section.addClass('expanded');
        // }
        res.entries.push({
            definition: $el.prop('outerHTML'),
        });
        //TODO 提取习语idioms
    });

    return res;
}
