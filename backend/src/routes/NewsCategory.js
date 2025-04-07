const express = require('express');
const router = express.Router();
const { getNewsByCategoryId } = require('../controller/NewsController');

router.get('/:id', getNewsByCategoryId);

module.exports = router;