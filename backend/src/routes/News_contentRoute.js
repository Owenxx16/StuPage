const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadNewsContent } = require('../config/upload');
//const { createNewsContent, deleteNewsContent, updateNewsContent } = require('../controller/News_content');

const {
    getNewsContent,
    createNewsContent,
    updateNewsContent,
    deleteNewsContent,
    uploadTinyImage, upload
} = require('../controller/News_content');



//router.post("/", uploadNewsContent, multerErrorHandler, createNewsContent);
router.get("/", getNewsContent);
router.post("/", createNewsContent);
router.put('/:id', updateNewsContent);
router.delete('/:id', deleteNewsContent);

router.post('/upload', uploadTinyImage);


module.exports = router;