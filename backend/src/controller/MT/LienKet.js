const connection = require('../../config/database');
const { getAllLienKet, getLienKetById, updateLienKet, deleteLienKet } = require('../../service/MT/CRUDlienket');
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

const getAllLienKetController = async (req, res) => {
  try {
    let lienket = await getAllLienKet();
    sendSuccess(res, 'LienKet fetched successfully', lienket);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createLienKetController = async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, 'Missing file: image is required', 400);
    }
    const image = req.file.filename;
    const { sponsor, link, categoryId } = req.body;
    if (!sponsor || !link) {
      return sendError(res, 'Missing required fields: sponsor and/or link', 400);
    }
    const [result] = await connection.execute(
      "INSERT INTO lienket (image, sponsor, link, category_id) VALUES (?, ?, ?, ?)",
      [image, sponsor, link, categoryId]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getLienKetByIdController = async (req, res) => {
  try {
    let id = req.params.id;
    let lienket = await getLienKetById(id);
    sendSuccess(res, 'LienKet fetched successfully', lienket);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateLienKetController = async (req, res) => {
  try {
    let id = req.params.id;
    let image = req.file ? req.file.filename : null;
    let { sponsor, link } = req.body;
    sponsor = sponsor !== undefined ? sponsor : null;
    link = link !== undefined ? link : null;
    const result = await updateLienKet(id, image, sponsor, link);
    sendSuccess(res, 'Cập nhật thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteLienKetController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await deleteLienKet(id);
    sendSuccess(res, 'Xóa thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getAllLienKetByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const [rows] = await connection.execute("SELECT * FROM lienket WHERE category_id = ?", [categoryId]);
    sendSuccess(res, 'LienKet fetched successfully', rows);
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = {
  getAllLienKetController,
  createLienKetController,
  getLienKetByIdController,
  updateLienKetController,
  deleteLienKetController,
  upload,
  getAllLienKetByCategoryId
};