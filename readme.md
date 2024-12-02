# Youdao To Anki

将有道词典的单词本导入到anki中

流程为：
* 从有道单词本同步数据到本地
* 在牛津高阶中查找单词数据
* 将单词数据导入到anki中

所以你背诵的内容为牛津高阶中的单词详情

### 启动命令

```bash
pnpm install
# 将./local目录作为工作目录
pnpm run start -- --dir=./local
```

### Anki配置
* 安装插件 https://ankiweb.net/shared/info/2055492159 

### 牛津高阶双解第10版
字典：
* 牛津高阶 OALD 2023.09 英汉双解 Final  https://forum.freemdict.com/t/topic/22813
* 牛津高阶双解第10版完美版（OALDPE） https://forum.freemdict.com/t/topic/30466

将下载的字典转为sqlite:
https://github.com/liuyug/mdict-utils

