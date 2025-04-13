const connection = require('../../config/database');
const { sendSuccess, sendError } = require('../../utils/response');

const getAllCategoryNavbar = async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM categories_nav');
    sendSuccess(res, 'Categories_nav fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getCategoryNavbarById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('SELECT * FROM categories_nav WHERE id = ?', [id]);
    if (rows.length === 0) {
      return sendError(res, 'Category not found', 404);
    }
    sendSuccess(res, 'Category fetched successfully', rows[0]);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateCategoryNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    if (!name) {
      return sendError(res, 'Missing required fields', 400);
    }
    const [rows] = await connection.execute('UPDATE categories_nav SET name = ? WHERE id = ?', [name, id]);
    if (rows.affectedRows === 0) {
      return sendError(res, 'Category not found', 404);
    }
    sendSuccess(res, 'Update thành công', { affectedRows: rows.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteCategoryNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('DELETE FROM categories_nav WHERE id = ?', [id]);
    if (rows.affectedRows === 0) {
      return sendError(res, 'Category not found', 404);
    }
    sendSuccess(res, 'Delete thành công', { affectedRows: rows.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const createCategoryNavbar = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return sendError(res, 'Missing required fields', 400);
    }
    const [rows] = await connection.execute('INSERT INTO categories_nav (name) VALUES (?)', [name]);
    sendSuccess(res, 'Insert thành công', { insertId: rows.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllCategoryNavbar, 
  getCategoryNavbarById, 
  updateCategoryNavbar, 
  deleteCategoryNavbar, 
  createCategoryNavbar 
};