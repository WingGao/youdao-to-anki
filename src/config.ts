import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { DataSource } from "typeorm"

export interface IConfig {
    assertsDir: string;
    workDir: string;
    youdao: {
        cookie: string;
    }
    anki: {
        connect: string;
        defaultDeck: string;
        defaultNoteModel: string;
    }
    mdict: {
        oald10: string;
    }
}

let globalConfig: IConfig;

export function loadConfig(configPath: string) {
    globalConfig = yaml.load(fs.readFileSync(configPath, 'utf8')) as IConfig;
    globalConfig.workDir = path.resolve(path.dirname(configPath));
    globalConfig.assertsDir = path.resolve(__dirname, '..', 'asserts');
    if(!fs.existsSync(globalConfig.assertsDir)) {
        throw new Error(`assertsDir 不存在: ${globalConfig.assertsDir}`);
    }
    return globalConfig;
}

export function getConfig() {
    return globalConfig;
}

