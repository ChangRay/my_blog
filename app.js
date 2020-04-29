// --------------package---------------
// 引入node path模塊
const path = require("path");
// 引入express搭配模板引擎
const express_art_template = require("express-art-template");
// 引入時間格式化
const dateFormat = require("dateformat");
// 引入模板引擎(添加模板變量用)
const template = require("art-template");
// --------------package---------------

// 創建app server實例
const express = require("express");
const app = express();

// ---------------配置---------------------
// 設置public資料夾 - 開放靜態資源
// __dirname指向當前js運行的絕對目錄(也就是root目錄)
app.use(express.static(path.join(__dirname, "public")));
// 配置模板引擎(模板資料夾、註冊模板引擎與指定文件後綴、指定使用的模板引擎)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "art");
app.engine("art", express_art_template);

// 為模板引擎添加模板變量(模板內可使用的Fn/data)
template.defaults.imports.dateFormat = dateFormat;
// ---------------配置---------------------

// ---------------route---------------------
app.use("/", require("./route/index"));
// ---------------route---------------------

// 處理404的中間件(放在最底下)
app.use((req, res) => {
  res.send("404找不到頁面");
});

app.listen(3000, () => {
  console.log("server啟動成功");
});
