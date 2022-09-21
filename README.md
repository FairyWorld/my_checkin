<div align="center"> 
<h1 align="center">my_checkin</h1>

[![GitHub stars](https://img.shields.io/github/stars/fairyworld/my_checkin?style=flat-square)](https://github.com/fairyworld/my_checkin)
[![GitHub forks](https://img.shields.io/github/forks/fairyworld/my_checkin?style=flat-square)](https://github.com/fairyworld/my_checkin/network)
[![GitHub issues](https://img.shields.io/github/issues/fairyworld/my_checkin?style=flat-square)](https://github.com/fairyworld/my_checkin/issues)
![GitHub issues](https://img.shields.io/github/languages/code-size/fairyworld/my_checkin?style=flat-square)
</div>

# 简介
一些常用网站以及app的签到,有用的话点个star⭐️呗  
# 签到列表
<details>
<summary>查看签到列表</summary>

 - [x] [时光相册](http://dbmxb.top/)每日签到
</details>

# 使用方法 
下载源码,安装依赖
复制一份config.yml.temple文件并改名config.yml 
在config.yml文件内填入对应cookies
> 注意每个冒号后面都有空格  
在`config.yml`文件里自行按照格式添加需要的任务,运行
   ```       
      git clone https://github.com/fairyworld/my_checkin.git
      cd /sdcard/checkbox (这里还是要看你的路径)
      npm install
      node index.js
   ```        
如不想填任务列表,可在index.js后加上对应脚本名字    
如`node checkbox.js acfun csdn`  
多脚本间用空格  
一般用于定时任务 

## 青龙使用教程
```
ql repo https://github.com/fairyworld/my_checkin.git "" "" "modules|scripts|config|sendmsg" "main"
```
 > 1 首先在青龙目录下config.sh设置里拉取sh后缀文件 大概这个自己找RepoFileExtensions  = xxx这一行 里边加上sh就可以了    
 2 在面板内添加定时任务 (上面ql repo那条 定时看你)    
 3 手动运行my_checkin安装任务 无需禁用  
 4 在`ql/data/config/fairyworld/my_checkin/config.yml`里填写cookie以及需要运行的任务列表(开头taskList)等信息   

 # 致谢
[@Wenmoux](https://github.com/Wenmoux/checkbox/tree/master)  

# 免责申明
该项目仅供学习使用，严禁用于商业用途，由此造成的一切后果，本人概不负责。 
