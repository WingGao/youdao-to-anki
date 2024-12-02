import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { DataSource } from "typeorm"

export interface IConfig {
    workDir: string;
    youdao: {
        cookie: string;
    }
    anki: {
        connect: string;
    }
    mdict: {
        oald10: string;
    }
}

let globalConfig: IConfig;

export function loadConfig(configPath: string) {
    globalConfig = yaml.load(fs.readFileSync(configPath, 'utf8')) as IConfig;
    globalConfig.workDir = path.resolve(path.dirname(configPath));
    return globalConfig;
}

export function getConfig() {
    return globalConfig;
}

