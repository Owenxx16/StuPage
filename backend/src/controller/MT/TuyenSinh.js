const connection = require('../../config/database');
const {getAllTuyenSinh, getTSById, updateTS, deleteTS} = require('../../service/MT/CRUDtuyensinh');

const getAllTSController = async (req, res) => {
  try {
    const ts = await getAllTuyenSinh();
    res.json(ts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createTSController = async (req, res) => {
  const tenTS = req.body.name;
  try {
    const result = await connection.execute('INSERT INTO tuyensinh (name) VALUES (?)', [tenTS]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getTSControllerById = async (req, res) => {
  const id = req.params.id;
  try {
    const ts = await getTSById(id);
    res.json(ts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateTSController = async (req, res) => {
  const id = req.params.id;
  const tents = req.body.name;
  try {
    const result = await updateTS(id, tents);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteTSController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteTS(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllTSController, createTSController, getTSControllerById, updateTSController, deleteTSController };