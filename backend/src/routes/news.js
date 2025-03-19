const express = require('express');
const router = express.Router();

const {getNews,
  getNewsByIdd,
  insertNewsWithContent,
  updateNews,
  deleteNew} = require('../controller/MT/news.js');


  router.get('/', getNews);
  router.get('/:id', getNewsByIdd);
  router.post('/', insertNewsWithContent);
  router.put('/:id', updateNews);
  router.delete('/:id', deleteNew);


module.exports = router;