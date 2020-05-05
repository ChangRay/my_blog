// --------------package---------------
// 引入node path模塊
const path = require("path");
// 引入express搭配模板引擎
const express_art_template = require("express-art-template");
// 引入bodyParser(自動處理post請求的參數  添加到req.body中-obj)
const bodyParser = require("body-parser");
// 引入時間格式化
const dateFormat = require("dateformat");
// 引入模板引擎(添加模板變量用)
const template = require("art-template");
// 引入中間件morgan打印client端的請求訊息
const morgan = require("morgan");
// --------------package---------------

// 記錄開發環境
const NODE_ENV = process.env.NODE_ENV || "development";
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

// 使用body-parser中間件(採urlencoded - 一般表單處理)
// 關閉擴展(使用原生模塊)
app.use(bodyParser.urlencoded({ extended: false }));

// 依照開發環境 按需啟用morgan
if (NODE_ENV === "development") {
  console.log("開發環境  掛載morgan");
  app.use(morgan("dev"));
} else if (NODE_ENV === "production") {
  console.log("生產環境");
}

// ---------------配置---------------------

// ---------------route---------------------
app.use("/", require("./route/index"));
app.use('/admin', require('./route/admin'))
// ---------------route---------------------

// 處理404的中間件(放在最底下)
app.use((req, res) => {
  res.send("404找不到頁面");
});

app.listen(3000, () => {
  console.log("server啟動成功 http://localhost:3000");
});
