const connection = require('../../config/database');
const { getAllCamNang, getCamNangById, updateCamNang, deleteCamNang } = require('../../service/MT/CRUDcamnang');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { sendSuccess, sendError } = require('../../utils/response');
const cloudinary = require('../../config/cloudinary');
const streamifier = require('streamifier');

// Set up multer for file upload

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
  try {
    if (!req.file) {
      return sendError(res, "No file uploaded", 400);
    }
    // Upload file từ buffer của multer lên Cloudinary
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'camnang' }, // folder trên Cloudinary
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const resultUpload = await uploadStream();
    const imageUrl = resultUpload.secure_url;
    const result = await connection.execute(
      'INSERT INTO camnang (updated_at, head, body, footer, altimg, image, link, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [update, head, body, footer, altimg, imageUrl, link, category_id]
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
  try {
    let imageUrl = null;
    if (req.file) {  
      const uploadStream = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'camnang' },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };
      const resultUpload = await uploadStream();
      imageUrl = resultUpload.secure_url;
    }
    const result = await updateCamNang(id, head, body, footer, altimg, imageUrl, link, category_id);
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