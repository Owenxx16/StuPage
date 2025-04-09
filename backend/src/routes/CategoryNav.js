const express = require('express');
const router = express.Router();
const connection = require('../config/database');
const {getAllCategoryNavbar, getCategoryNavbarById, updateCategoryNavbar, deleteCategoryNavbar, createCategoryNavbar} = require('../controller/MT/CategoryNavbar');

router.get('/', getAllCategoryNavbar);
router.get('/:id', getCategoryNavbarById);
router.post('/', createCategoryNavbar);
router.put('/:id', updateCategoryNavbar);
router.delete('/:id', deleteCategoryNavbar);


module.exports = router;