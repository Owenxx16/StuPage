const connection = require('../../config/database');
const{getAllSinhVien, getSVById, updateSV, deleteSV} = require('../../service/MT/CRUDsinhvien');

const getAllSVController = async (req, res) => {
  try {
    const sv = await getAllSinhVien();
    res.json(sv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createSVController = async (req, res) => {
  const tenSV = req.body.name;
  try {
    const result = await connection.execute('INSERT INTO sinhvien (name) VALUES (?)', [tenSV]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getSVControllerById = async (req, res) => {
  const id = req.params.id;
  try {
    const sv = await getSVById(id);
    res.json(sv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateTSController = async (req, res) => {
  const id = req.params.id;
  const tensv = req.body.name;
  try {
    const result = await updateSV(id, tensv);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteSVController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteSV(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllSVController, createSVController, getSVControllerById, updateTSController, deleteSVController };