const express = require("express");
// 創建路由實例
const indexRouter = express.Router();

// 規則
indexRouter.get("/", require("./index/indexPage"));
indexRouter.get("/articles", require("./index/articlesPage"));
indexRouter.get("/article", require("./index/articleInnerPage"));

module.exports = indexRouter;
