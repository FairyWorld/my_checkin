// 东北魔仙堡
const axios = require("axios");

function dbmxb() {
  return new Promise(async (resolve) => {
    try {
      let url = "http://dbmxb.top/wp-admin/admin-ajax.php";
      const header = {
        headers: {
          Referer: "http://dbmxb.top/",
          cookie: config.dbmxb.cookie,
        },
      };
      let res = await axios.post(url, "action=user_checkin", header);
      data = res.data.msg;
      console.log(data);
    } catch (err) {
      console.log(err);
      data = "签到接口请求出错";
    }
    resolve("【东北魔仙堡】：" + data);
  });
}
//dbmxb()
module.exports = dbmxb;
