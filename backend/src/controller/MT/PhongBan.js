const connection = require('../../config/database');
const {getAllPhongBan, getPhongBanById, updatePhongBan, deletePhongBan} = require('../../service/MT/CRUDphongban');


const getAllPhongBanController = async (req, res) => {
  try {
    const phongban = await getAllPhongBan();
    res.json(phongban);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createPhongBanController = async (req, res) => {
  const tenPhongBan = req.body.tenPB;
  try {
    const result = await connection.execute('INSERT INTO department (tenPB) VALUES (?)', [tenPhongBan]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const getPhongBanByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const phongban = await getPhongBanById(id);
    res.json(phongban);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updatePhongBanController = async (req, res) => {
  const id = req.params.id;
  const tenPhongBan = req.body.tenPB;
  try {
    const result = await updatePhongBan(id, tenPhongBan);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const deletePhongBanController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deletePhongBan(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllPhongBanController, createPhongBanController, getPhongBanByIdController, updatePhongBanController, deletePhongBanController };