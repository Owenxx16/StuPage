const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const { createNews, getAllNews, getNewsById, updateNews, deleteNews, createNewsContent } = require('../controller/NewsController');

// Lấy tất cả tin tức
router.get('/', getAllNews);
// Lấy tin tức theo ID
router.get('/:id', getNewsById);

// Tạo tin tức mới
// Sử dụng `upload.fields()` để nhận 2 loại file:
//   - image (1 file)  → ảnh đại diện
//   - image_content (tối đa 10 file) → ảnh nội dung
// router.post('/', 
//     upload.fields([
//         { name: 'image', maxCount: 1 }, 
//         { name: 'image_content', maxCount: 10 }
//     ]), 
//     createNews
// );

// Cập nhật tin tức
router.put('/news/:id', updateNews);
// Xóa tin tức
router.delete('/news/:id', deleteNews);
// API tạo bài viết (upload 1 ảnh thumbnail)
router.post("/news", upload.single("image"), createNews);

// API tạo nội dung bài viết (text + nhiều ảnh)
router.post("/news_content", createNewsContent);
module.exports = router;
