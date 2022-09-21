# cron: 0 0 * * *
# new Env('my_checkin安装&&依赖安装');
if [ ! -f "/ql/data/config/FairyWorld_my_checkin_main/config.yml" ]; then
 echo "生成配置文件 路径ql/data/config/FairyWorld_my_checkin_main/config.yml"
 cp /ql/data/repo/FairyWorld_my_checkin_main/config.yml.temple /ql/data/config/FairyWorld_my_checkin_main/config.yml
else
 echo "已存在配置文件"
 echo "生成空白模板 /ql/data/config/FairyWorld_my_checkin_main/config.yml.sample"
 cp /ql/data/repo/FairyWorld_my_checkin_main/config.yml.temple /ql/data/config/FairyWorld_my_checkin_main/config.yml.sample
fi

echo "cookie填写请去config/FairyWorld_my_checkin_main/config.yml填写 青龙面板也有文件编辑功能"
echo "安装依赖,不知道你的npm会不会报错我就npm pnpm一起用了 不会高大上的emmmm...."
# npm install  axios  fs js-yaml yargs
pnpm install  axios  fs js-yaml yargs
echo "over 记得禁用我哦ԅ(¯ㅂ¯ԅ)"
