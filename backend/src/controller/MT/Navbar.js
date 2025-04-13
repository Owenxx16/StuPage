const connection = require('../../config/database');
const { sendSuccess, sendError } = require('../../utils/response');

const getAllNavbar = async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM navbar');
    if (rows.length === 0) {
      return sendError(res, 'Navbar not found', 404);
    }
    sendSuccess(res, 'Navbar fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getNavbarById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('SELECT * FROM navbar WHERE id = ?', [id]);
    if (rows.length === 0) {
      return sendError(res, 'Navbar not found', 404);
    }
    sendSuccess(res, 'Navbar fetched successfully', rows[0]);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getNavbarByCategoryId = async (req, res) => {
  try {
    const navbarId = req.params.navbar;
    const [rows] = await connection.execute('SELECT * FROM navbar WHERE navbar_id = ?', [navbarId]);
    if (rows.length === 0) {
      return sendError(res, 'Navbar not found', 404);
    }
    sendSuccess(res, 'Navbar fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, navbarId } = req.body;
    if (!name || !navbarId) {
      return sendError(res, 'Missing required fields', 400);
    }
    const [rows] = await connection.execute('UPDATE navbar SET name = ?, navbar_id = ? WHERE id = ?', [name, navbarId, id]);
    if (rows.affectedRows === 0) {
      return sendError(res, 'Navbar not found', 404);
    }
    sendSuccess(res, 'Update thành công', { affectedRows: rows.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('DELETE FROM navbar WHERE id = ?', [id]);
    if (rows.affectedRows === 0) {
      return sendError(res, 'Navbar not found', 404);
    }
    sendSuccess(res, 'Delete thành công', { affectedRows: rows.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const createNavbar = async (req, res) => {
  try {
    const { name, navbarId } = req.body;
    if (!name || !navbarId) {
      return sendError(res, 'Missing required fields', 400);
    }
    const [rows] = await connection.execute('INSERT INTO navbar (name, navbar_id) VALUES (?, ?)', [name, navbarId]);
    sendSuccess(res, 'Insert thành công', { insertId: rows.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = {
  getAllNavbar,
  getNavbarById,
  getNavbarByCategoryId,
  updateNavbar,
  deleteNavbar,
  createNavbar
};


