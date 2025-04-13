const connection = require('../../config/database');
const { getAllChuongTrinh, getChuongTrinhById, deleteChuongTrinh, updateChuongTrinh } = require('../../service/MT/CRUDchuongtrinh');
const { sendSuccess, sendError } = require('../../utils/response');

const getAllChuongTrinhController = async (req, res) => {
  try {
    const chuongtrinh = await getAllChuongTrinh();
    sendSuccess(res, 'ChuongTrinh fetched successfully', chuongtrinh);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createChuongTrinhController = async (req, res) => {
  const updateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  let { title, content, link, category_id } = req.body;
  if (!title || !content || !link) {
    return sendError(res, 'Missing required fields', 400);
  }
  try {
    const result = await connection.execute(
      'INSERT INTO chuongtrinh (title, updated_at, content, link, category_id) VALUES (?, ?, ?, ?, ?)',
      [title, updateTime, content, link, category_id]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getChuongTrinhByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const chuongtrinh = await getChuongTrinhById(id);
    sendSuccess(res, 'ChuongTrinh fetched successfully', chuongtrinh);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateChuongTrinhController = async (req, res) => {
  const id = req.params.id;
  let { title, link, category_id } = req.body;
  if (!title || !link || !category_id) {
    return sendError(res, 'Missing required fields', 400);
  }
  try {
    const result = await updateChuongTrinh(id, title, link, category_id);
    sendSuccess(res, 'Update thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteChuongTrinhController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteChuongTrinh(id);
    sendSuccess(res, 'Delete thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllChuongTrinhController, 
  getChuongTrinhByIdController, 
  createChuongTrinhController, 
  updateChuongTrinhController, 
  deleteChuongTrinhController 
};

