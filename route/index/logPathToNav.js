// 用於紀錄path以切換nav 的 active狀態
module.exports = (req, res, next) => {
  // req.app.locals可以供整個app全局使用(包含在模板內部)
  req.app.locals.path = req.path;
  next();
};
