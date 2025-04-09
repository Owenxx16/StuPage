const connection = require('../../config/database');
const { getAllGiangDay, getGiangDayById, updateGiangDay, deleteGiangDay } = require('../../service/MT/CRUDgiangday');

const multer = require('multer');
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
    res.json(giangday);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createGiangDayController = async (req, res) => {
  const update = new Date();
  const { title } = req.body;
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const image = req.file ? req.file.filename : null;
  try {
    const result = await connection.execute('INSERT INTO giangday (updated_at, image,title) VALUES (?, ?,?)', [update, image, title]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getGiangDayByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const giangday = await getGiangDayById(id);
    res.json(giangday);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const upadateGiangDayController = async (req, res) => {
  const id = req.params.id;
  const title  = req.body;
  if (title === undefined) {
    return res.status(400).json({ success: false, message: "Missing field: title"});
  }
  const image = req.file ? req.file.filename : null;
  try {
    const result = await updateGiangDay(id, image, title);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteGiangDayController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteGiangDay(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllGiangDayController, createGiangDayController, getGiangDayByIdController, upadateGiangDayController, deleteGiangDayController, upload };