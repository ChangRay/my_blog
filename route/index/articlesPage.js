module.exports = (req, res) => {
  const articleInfo = {
    tag: "一般",
    cover: "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/11/UniversalCoverings_1200_Social.jpg",
    title: "個人Blog上線",
    desc: "不錯不錯不錯不錯不錯不錯不錯不錯不錯不錯".slice(0,4) + "...",
    author: "ChangRay",
    date: new Date()
  };

  const articlesArr = [articleInfo, articleInfo, articleInfo];
  res.render("home/articles", { articlesArr });
};
