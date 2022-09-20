/*
cron: 0 9 * * *
*/

const fs = require("fs");
const config = require("./config.json");

let sendMsg = null,
  notify = null,
  logs = "",
  needPush = true;

// 动态引入库, sendMsg是我们的通知, sendNotify.js是青龙拉库后自动添加进来的
if (config.sendMsg) {
  sendMsg = require("./sendMsg");
} else if (config.sendNotify && process.env.QL_DIR && fs.existsSync("./sendNotify")) {
  notify = require("./sendNotify");
}

async function start() {
  if (config.taskList.length) {
    sign(taskList);
  }
}

function sign(taskList) {
  return new Promise(async (resolve) => {
    try {
      console.log("任务个数  " + taskList.length);
      console.log("------------开始签到任务------------");
      for (let i = 0; i < taskList.length; i++) {
        console.log(`任务${i + 1}执行中`);
        let exists = fs.existsSync(`./scripts/${taskList[i]}.js`);
        if (exists) {
          const task = require(`./scripts/${taskList[i]}.js`);
          // 执行单个任务
          taskResult = await task();
          // 追加日志
          logs += taskResult + "    \n\n";
        } else {
          logs += `${taskList[i]}  不存在该脚本文件,请确认输入是否有误\n\n`;
          console.log("不存在该脚本文件,请确认输入是否有误");
        }
      }
      console.log("------------任务执行完毕------------\n");
      if (config.sendMsg){
        await sendmsg(logs);
      } 
      if (config.sendNotify){
        await notify.sendNotify("我的签到", `${logs}\n\n`);
      }
    } catch (err) {
      console.log(err);
    }
    resolve();
  });
}

start();
