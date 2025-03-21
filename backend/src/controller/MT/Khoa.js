const connection = require('../../config/database');
const {getAllKhoa, getKhoaById, updateKhoa, deleteKhoa} = require('../../service/MT/CRUDkhoa');

const getAllKhoaController = async (req, res) => {
  try {
    const khoa = await getAllKhoa();
    res.json(khoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createKhoaController = async (req, res) => {
  const tenKhoa = req.body.name;
  try {
    const result = await connection.execute('INSERT INTO khoa (name) VALUES (?)', [tenKhoa]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getKhoaByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const khoa = await getKhoaById(id);
    res.json(khoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateKhoaController = async (req, res) => {
  const id = req.params.id;
  const tenKhoa = req.body.name;
  try {
    const result = await updateKhoa(id, tenKhoa);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteKhoaController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteKhoa(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllKhoaController, createKhoaController, getKhoaByIdController, updateKhoaController, deleteKhoaController };