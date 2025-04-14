const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadNews } = require('../config/uploadCloudinary');
const { createNews, getAllNews, getNewsById, updateNews, deleteNews, getNewsByCategory } = require('../controller/NewsController');



const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            status: 400,
            message: err.message,
            data: null
        });
    }
    next(err);
};
router.get('/', getAllNews);
router.get('/category/:id', getNewsByCategory);
router.get('/:id', getNewsById);
router.put('/:id', uploadNews, multerErrorHandler, updateNews);
router.delete('/:id', deleteNews);
router.post("/", uploadNews, multerErrorHandler, createNews);
module.exports = router;
