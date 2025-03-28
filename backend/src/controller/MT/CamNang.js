const connection = require('../../config/database');
const {getAllCamNang, getCamNangById, updateCamNang, deleteCamNang} = require('../../service/MT/CRUDcamnang');
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

const getAllCamNangController = async (req, res) => {
  try {
    const camnang = await getAllCamNang();
    res.json(camnang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createCamNangController = async (req, res) => {
  const update = new Date();
  const { head, body, footer, altimg, link, category_id } = req.body;
  const image = req.file.filename;
  try {
    const result = await connection.execute('INSERT INTO camnang (updated_at, head, body, footer, altimg, image, link, category_id ) VALUES (?, ?, ?, ?, ?, ?, ?,?)', [update, head, body, footer, altimg, image, link,category_id ]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getCamNangByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const camnang = await getCamNangById(id);
    res.json(camnang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateCamNangController = async (req, res) => {
  const id = req.params.id;
  const { head, body, footer, altimg, link } = req.body;
  const image = req.file.filename;
  try {
    const result = await updateCamNang(id, head, body, footer, altimg, image, link);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteCamNangController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteCamNang(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllCamNangController, createCamNangController, getCamNangByIdController, updateCamNangController, deleteCamNangController,upload };