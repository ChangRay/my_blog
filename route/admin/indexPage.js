module.exports = (req, res) => {

  req.app.locals.currentLink = 'admin'

  res.render('admin/index')
}
