const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadNewsContent } = require('../config/upload');
const { createNewsContent, deleteNewsContent, updateNewsContent } = require('../controller/News_content');

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

router.post("/", uploadNewsContent, multerErrorHandler, createNewsContent);
router.put('/:id', uploadNewsContent, updateNewsContent);
router.delete('/:id', deleteNewsContent);
module.exports = router;