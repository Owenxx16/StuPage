const express = require('express');
const router = express.Router();
const { getallCategories,
    createCategories,
    getallCategoryById,
    updateCategory,
    deleteCategory } = require('../controller/CategoriesController');




router.get('/', getallCategories);
router.post('/', createCategories);
router.get('/:id', getallCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;    