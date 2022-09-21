<div align="center"> 
<h1 align="center">my_checkin</h1>

[![GitHub stars](https://img.shields.io/github/stars/FairyWorld/my_checkin?style=flat-square)](https://github.com/FairyWorld/my_checkin)
[![GitHub forks](https://img.shields.io/github/forks/FairyWorld/my_checkin?style=flat-square)](https://github.com/FairyWorld/my_checkin/network)
[![GitHub issues](https://img.shields.io/github/issues/FairyWorld/my_checkin?style=flat-square)](https://github.com/FairyWorld/my_checkin/issues)
![GitHub issues](https://img.shields.io/github/languages/code-size/FairyWorld/my_checkin?style=flat-square)

</div>

# 简介

一些常用网站以及 app 的签到,有用的话点个 star⭐️ 呗

# 签到列表

<details>
<summary>查看签到列表</summary>

- [x] [时光相册](http://dbmxb.top/)每日签到
</details>

# 使用方法

下载源码,安装依赖
复制一份 config.yml.temple 文件并改名 config.yml
在 config.yml 文件内填入对应 cookies

> 注意每个冒号后面都有空格  
> 在`config.yml`文件里自行按照格式添加需要的任务,运行

```
   git clone https://github.com/FairyWorld/my_checkin.git
   cd /sdcard/checkbox (这里还是要看你的路径)
   npm install
   node index.js
```

如不想填任务列表,可在 index.js 后加上对应脚本名字  
如`node checkbox.js acfun csdn`  
多脚本间用空格  
一般用于定时任务

## 青龙使用教程

```
ql repo https://github.com/FairyWorld/my_checkin.git "index|install|sendMsg" "" "scripts" "main"
```

> 1 首先在青龙目录下 config.sh 设置里拉取 sh 后缀文件 大概这个自己找 RepoFileExtensions = xxx 这一行 里边加上 sh 就可以了  
>  2 在面板内添加定时任务 (上面 ql repo 那条 定时看你)  
>  3 手动运行 my_checkin 安装任务 无需禁用  
>  4 在`ql/data/config/FairyWorld_my_checkin_main/config.yml`里填写 cookie 以及需要运行的任务列表(开头 taskList)等信息

# 致谢

[@Wenmoux](https://github.com/Wenmoux/checkbox/tree/master)

# 免责申明

该项目仅供学习使用，严禁用于商业用途，由此造成的一切后果，本人概不负责。
