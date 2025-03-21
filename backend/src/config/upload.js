const multer = require('multer');
const path = require('path');

// Cấu hình Multer để lưu trữ ảnh vào thư mục 'public/assets'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/assets');  // Thư mục lưu trữ ảnh
    },
    filename: (req, file, cb) => {
        // Tạo tên file bằng cách sử dụng thời gian hiện tại và phần mở rộng của file
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Kiểm tra loại file (chỉ cho phép ảnh)
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

// Cấu hình Multer
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },  // Giới hạn kích thước tệp là 5MB
    fileFilter: fileFilter
});

module.exports = upload;
