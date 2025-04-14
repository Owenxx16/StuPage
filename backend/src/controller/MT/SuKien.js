const connection = require('../../config/database');
const { getAllSuKien, getSuKienById, updateSuKien, deleteSuKien } = require('../../service/MT/CRUDsukien.js');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { sendSuccess, sendError } = require('../../utils/response');
const cloudinary = require('../../config/cloudinary');
const streamifier = require('streamifier');


const getAllSuKienController = async (req, res) => {
  try {
    const sukien = await getAllSuKien();
    sendSuccess(res, 'SuKien fetched successfully', sukien);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createSuKienController = async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, "No file uploaded", 400);
    }
    
    // Upload file từ buffer của multer lên Cloudinary
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'sukien' }, // thay folder nếu cần
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const resultUpload = await uploadStream();
    const hinh = resultUpload.secure_url; // URL của ảnh sau khi upload lên Cloudinary
    let ngay = new Date().getDate();
    let { diachi, noidung, categoryId } = req.body;
    const [rows, fields] = await connection.execute(
      'INSERT INTO sukien (image, ngay, diachi, noidung, category_id) VALUES (?, ?, ?, ?, ?)',
      [hinh, ngay, diachi, noidung, categoryId]
    );
    sendSuccess(res, 'Insert thành công', { insertId: rows.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getSuKienByIdController = async (req, res) => {
  try {
    let id = req.params.id;
    const sukien = await getSuKienById(id);
    sendSuccess(res, 'SuKien fetched successfully', sukien);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateSuKienByController = async (req, res) => {
  try {
    let id = req.params.id;
    let image = null;
    if (req.file) {
      // Upload file từ buffer của multer lên Cloudinary
      const uploadStream = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'sukien' },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };
      const resultUpload = await uploadStream();
      image = resultUpload.secure_url;
    }
    let ngay = new Date().getDate();
    let { diachi, noidung } = req.body;
    const result = await updateSuKien(id, image, ngay, diachi, noidung);
    sendSuccess(res, 'Update thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteSuKienController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await deleteSuKien(id);
    sendSuccess(res, 'Xóa thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllSuKienController, 
  createSuKienController, 
  getSuKienByIdController, 
  updateSuKienByController, 
  deleteSuKienController, 
  upload 
};


