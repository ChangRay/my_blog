module.exports = (req, res) => {
  const tempArr = [
    {
      article_title: '天天喝珍珠奶茶',
      article_date: '2099/09/09	'
    },
    {
      article_title: '天天喝玫瑰奶茶',
      article_date: '2099/09/09	'
    },
    {
      article_title: '天天喝焦糖奶茶',
      article_date: '2099/09/09	'
    }
  ]

  req.app.locals.currentLink = 'article'

  res.render('admin/articlesManage', { articles: tempArr })
}
