const connection = require('../../config/database');
const { getAllGiangDay, getGiangDayById, updateGiangDay, deleteGiangDay } = require('../../service/MT/CRUDgiangday');
const multer = require('multer');
const { sendSuccess, sendError } = require('../../utils/response');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cloudinary = require('../../config/cloudinary');
const streamifier = require('streamifier');

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
  try {
    if (!req.file) {
      return sendError(res, "No file uploaded", 400);
    }
    // Upload file từ buffer của multer lên Cloudinary
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'giangday' },
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
      'INSERT INTO giangday (updated_at, image, title) VALUES (?, ?, ?)',
      [updateTime, imageUrl, title]
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
  let imageUrl = null;
  if (req.file) {
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'giangday' },
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
  try {
    const result = await updateGiangDay(id, imageUrl, title);
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