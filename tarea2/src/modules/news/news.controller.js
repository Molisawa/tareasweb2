const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

getNews = async (req, res) => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const news = await axios.get(url);
  res.render("index", { articles: news.data.articles });
};

showNewsAsApi = async (req, res) => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const news = await axios.get(url);
  res.json(news.data.articles);
};

getNewByParam = async (req, res) => {
  let search = req.query.search;

  let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`;
  const filter_news = await axios.get(url);

  res.render("index", { articles: filter_news.data.articles });
};

showNewsByParam = async (req, res) => {
  const detail = req.query.detail;
  const img = req.query.img;

  let dom = await JSDOM.fromURL(detail);
  let reader = new Readability(dom.window.document).parse();

  res.render("detail", { detail: reader, urlImg: img, url: detail });
};

module.exports = {
  getNews,
  showNewsAsApi,
  getNewByParam,
  showNewsByParam,
};
