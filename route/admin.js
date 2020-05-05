const express = require('express')
const adminRouter = express.Router()

adminRouter.get('/', require('./admin/indexPage'))
adminRouter.get('/articlesManage', require('./admin/articlesManagePage'))
adminRouter.get('/articlesEdit', require('./admin/articleEditPage'))

module.exports = adminRouter
