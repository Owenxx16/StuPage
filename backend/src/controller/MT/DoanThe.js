
const connection = require('../../config/database');
const {getAllDoanThe, getDTById, updateDT, deleteDT } = require('../../service/MT/CRUDdoanthe');

const getAllDTController = async (req, res) => {
  try {
    const dt = await getAllDoanThe();
    res.json(dt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createDTController = async (req, res) => {
  const tenDT = req.body.name;
  try {
    const result = await connection.execute('INSERT INTO doanthe (name) VALUES (?)', [tenDT]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getDTControllerById = async (req, res) => {
  const id = req.params.id;
  try {
    const ts = await getDTById(id);
    res.json(ts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateDTController = async (req, res) => {
  const id = req.params.id;
  const tendt = req.body.name;
  try {
    const result = await updateDT(id, tendt);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteDTController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteDT(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {getAllDTController, createDTController, getDTControllerById, updateDTController, deleteDTController};