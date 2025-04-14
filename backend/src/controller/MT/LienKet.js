const connection = require('../../config/database');
const { getAllLienKet, getLienKetById, updateLienKet, deleteLienKet } = require('../../service/MT/CRUDlienket');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { sendSuccess, sendError } = require('../../utils/response');
const cloudinary = require('../../config/cloudinary');
const streamifier = require('streamifier');


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

    // Upload file lên Cloudinary
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'lienket' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const resultUpload = await uploadStream();
    const image = resultUpload.secure_url;
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
    let image = null;
    if (req.file) {
      // Upload file từ buffer của multer lên Cloudinary
      const uploadStream = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'lienket' },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };
      const resultUpload = await uploadStream();
      image = resultUpload.secure_url;
    }
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