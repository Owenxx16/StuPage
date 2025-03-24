const multer = require('multer');
const path = require('path');

// Storage cho image_title (lưu vào src/public/assets)
const storageTitle = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/assets');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Storage cho ảnh trong news_content (lưu vào src/public/content_news)
const storageContent = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/content_news');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

// Middleware cho news (single image)
const uploadNews = multer({
    storage: storageTitle,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
}).single('image');

// Middleware cho news_content (array of images)
const uploadNewsContent = multer({
    storage: storageContent,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
}).array('images', 10);

module.exports = { uploadNews, uploadNewsContent };