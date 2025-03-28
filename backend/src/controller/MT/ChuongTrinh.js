const connection = require('../../config/database');
const {getAllChuongTrinh, getChuongTrinhById, deleteChuongTrinh, updateChuongTrinh} = require('../../service/MT/CRUDchuongtrinh');

const getAllChuongTrinhController = async (req, res) => {
  try {
    const chuongtrinh = await getAllChuongTrinh();
    res.json(chuongtrinh);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const createChuongTrinhController = async (req, res) => {
  let update = new Date().toISOString().slice(0, 19).replace('T', ' ');
  let {title,content, link, category_id } = req.body;
  if (!title || !content || !link) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const result = await connection.execute('INSERT INTO chuongtrinh (title, updated_at, content, link, category_id ) VALUES (?, ?, ?, ?, ?)', [title, update, content, link, category_id ]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const getChuongTrinhByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const chuongtrinh = await getChuongTrinhById(id);
    res.json(chuongtrinh);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateChuongTrinhController = async (req, res) => {
  let id = req.params.id;
  let {title, link, category_id } = req.body;
  if (!title || !link || !category_id) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const result = await updateChuongTrinh(id, title, link, category_id );
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteChuongTrinhController = async (req, res) => {
  let id = req.params.id;
  try {
    const result = await deleteChuongTrinh(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllChuongTrinhController, getChuongTrinhByIdController, createChuongTrinhController, updateChuongTrinhController, deleteChuongTrinhController };

