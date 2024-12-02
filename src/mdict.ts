import { MDD, MDX } from "js-mdict";
import { getConfig } from "./config";
import { globbySync } from "globby";

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
}

export function ox10Lookup(word: string) {
    if(!ox10) {
        ox10 = new MdictWorker(getConfig().mdict.oald10);
    }
    const def = ox10.lookup(word);
    return def.definition;
}
