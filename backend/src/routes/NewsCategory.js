const express = require('express');
const router = express.Router();
const { getNewsByCategoryId } = require('../controller/NewsController');

// Route to get news by category ID
// Example: GET /categories/:id
router.get('/:id', getNewsByCategoryId);

module.exports = router;