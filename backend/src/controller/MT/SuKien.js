const connection = require('../../config/database');
const { getAllSuKien, getSuKienById, updateSuKien, deleteSuKien } = require('../../service/MT/CRUDsukien.js');
const multer = require('multer');
const { sendSuccess, sendError } = require('../../utils/response');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/assets'); // đảm bảo folder này tồn tại
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage });

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
    const hinh = req.file ? req.file.filename : null;
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
    const image = req.file ? req.file.filename : null;
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


