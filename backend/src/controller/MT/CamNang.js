const connection = require('../../config/database');
const { getAllCamNang, getCamNangById, updateCamNang, deleteCamNang } = require('../../service/MT/CRUDcamnang');
const multer = require('multer');
const { sendSuccess, sendError } = require('../../utils/response');

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage });

const getAllCamNangController = async (req, res) => {
  try {
    const camnang = await getAllCamNang();
    sendSuccess(res, 'CamNang fetched successfully', camnang);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createCamNangController = async (req, res) => {
  const update = new Date();
  const { head, body, footer, altimg, link, category_id } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const result = await connection.execute(
      'INSERT INTO camnang (updated_at, head, body, footer, altimg, image, link, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [update, head, body, footer, altimg, image, link, category_id]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getCamNangByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const camnang = await getCamNangById(id);
    sendSuccess(res, 'CamNang fetched successfully', camnang);
  } catch (error) {
    sendError(res, error.message);
  }
};

const updateCamNangController = async (req, res) => {
  const id = req.params.id;
  const { head, body, footer, altimg, link, category_id } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const result = await updateCamNang(id, head, body, footer, altimg, image, link, category_id);
    sendSuccess(res, 'Update thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteCamNangController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteCamNang(id);
    sendSuccess(res, 'Delete thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllCamNangController, 
  createCamNangController, 
  getCamNangByIdController, 
  updateCamNangController, 
  deleteCamNangController, 
  upload 
};