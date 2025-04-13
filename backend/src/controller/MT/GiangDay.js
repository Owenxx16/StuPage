const connection = require('../../config/database');
const { getAllGiangDay, getGiangDayById, updateGiangDay, deleteGiangDay } = require('../../service/MT/CRUDgiangday');
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

const getAllGiangDayController = async (req, res) => {
  try {
    const giangday = await getAllGiangDay();
    sendSuccess(res, 'GiangDay fetched successfully', giangday);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createGiangDayController = async (req, res) => {
  const updateTime = new Date();
  const { title } = req.body;
  if (!req.file) {
    return sendError(res, "No file uploaded", 400);
  }
  const image = req.file.filename;
  try {
    const result = await connection.execute(
      'INSERT INTO giangday (updated_at, image, title) VALUES (?, ?, ?)',
      [updateTime, image, title]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId }, 201);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getGiangDayByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const giangday = await getGiangDayById(id);
    sendSuccess(res, 'GiangDay fetched successfully', giangday);
  } catch (error) {
    sendError(res, error.message);
  }
};

const upadateGiangDayController = async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  if (!title) {
    return sendError(res, "Missing field: title", 400);
  }
  const image = req.file ? req.file.filename : null;
  try {
    const result = await updateGiangDay(id, image, title);
    sendSuccess(res, 'Update thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteGiangDayController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteGiangDay(id);
    sendSuccess(res, 'Delete thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllGiangDayController, 
  createGiangDayController, 
  getGiangDayByIdController, 
  upadateGiangDayController, 
  deleteGiangDayController, 
  upload 
};