const router = require('express').Router();
const newsController = require('./news.controller');
const {cacheInit} = require('../../middlewares/cache');

router.get('/', cacheInit, newsController.getNews);

router.get('/api',  newsController.showNewsAsApi);

router.get('/search', cacheInit, newsController.getNewByParam);

router.get('/detail', newsController.showNewsByParam);

module.exports = router;