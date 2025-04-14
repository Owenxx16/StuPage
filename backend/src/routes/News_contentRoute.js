const express = require('express');
const router = express.Router();
const multer = require('multer');
//const { createNewsContent, deleteNewsContent, updateNewsContent } = require('../controller/News_content');

const {
    getNewsContent,
    getnewcontentbyid,
    createNewsContent,
    updateNewsContent,
    deleteNewsContent,
    uploadTinyImage, upload
} = require('../controller/News_content');



//router.post("/", uploadNewsContent, multerErrorHandler, createNewsContent);
router.get("/", getNewsContent);
router.get("/:id", getnewcontentbyid);
router.post("/", createNewsContent);
router.put('/:id', updateNewsContent);
router.delete('/:id', deleteNewsContent);

router.post('/upload', uploadTinyImage);


module.exports = router;