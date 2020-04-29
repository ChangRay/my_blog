const express = require("express");
// 創建路由實例
const index = express.Router();

// ---------------middle---------------------
index.use(require("./index/logPathToNav"));
// ---------------middle---------------------

// 規則
index.get("/", require("./index/indexPage"));

index.get("/article", require("./index/articlePage"));

module.exports = index;
