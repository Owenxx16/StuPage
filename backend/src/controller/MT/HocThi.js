const connection = require('../../config/database');
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

const getAllHocthiController = async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi ORDER BY updated_at DESC');
    sendSuccess(res, 'Hocthi fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getHocthiByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi WHERE id = ?', [id]);
    if (rows.length === 0) {
      return sendError(res, 'Không tìm thấy bản ghi nào', 404);
    }
    sendSuccess(res, 'Hocthi fetched successfully', rows[0]);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createHocthiController = async (req, res) => {
  const { content, description, link, categoryId } = req.body;
  const image = req.file ? req.file.filename : null;
  const updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  if (!content || !description) {
    return sendError(res, 'Thiếu các trường bắt buộc: content, description', 400);
  }
  try {
    const [result] = await connection.execute(
      'INSERT INTO hocthi (updated_at, content, image, description, link, category_id) VALUES (?, ?, ?, ?, ?, ?)',
      [updated_at, content, image, description, link, categoryId]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateHocthiController = async (req, res) => {
  const id = req.params.id;
  const { content, description, link } = req.body;
  const image = req.file ? req.file.filename : null;
  const updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    const [result] = await connection.execute(
      'UPDATE hocthi SET updated_at = ?, content = ?, image = ?, description = ?, link = ? WHERE id = ?',
      [updated_at, content, image, description, link, id]
    );
    if (result.affectedRows === 0) {
      return sendError(res, 'Không tìm thấy bản ghi để cập nhật', 404);
    }
    sendSuccess(res, 'Cập nhật thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteHocthiController = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await connection.execute('DELETE FROM hocthi WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return sendError(res, 'Không tìm thấy bản ghi để xóa', 404);
    }
    sendSuccess(res, 'Xóa thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getAllHocthiByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi WHERE category_id = ?', [categoryId]);
    sendSuccess(res, 'Hocthi fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = {
  getAllHocthiController,
  getHocthiByIdController,
  createHocthiController,
  updateHocthiController,
  deleteHocthiController,
  upload,
  getAllHocthiByCategoryId
};