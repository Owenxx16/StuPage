const connection = require('../../config/database');
const { getAllGiangDay, getGiangDayById, updateGiangDay, deleteGiangDay } = require('../../service/MT/CRUDgiangday');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})


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
  const image = req.file.filename;
  try {
    const result = await connection.execute('INSERT INTO giangday (updated_at, image,title) VALUES (?, ?)', [update, image, title]);
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
  const { title } = req.body;
  const image = req.file.filename;
  try {
    const result = await updateGiangDay(id, title, image);
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