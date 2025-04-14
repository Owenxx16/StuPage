const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storageNews = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'news_titles', // thư mục trên Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
        transformation: [{ width: 800, height: 600, crop: 'limit' }]
    }
});




const storageTiny = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'news_contents', // tên folder trong Cloudinary
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
      transformation: [{ width: 1200, crop: 'limit' }]
    }
  });
  
  const uploadTinyImage = multer({ storage: storageTiny }).single('file');

const uploadNews = multer({ storage: storageNews }).single('image');

module.exports = { uploadNews,uploadTinyImage };
