const connection = require('../../config/database');
const {getAllTraining, getTrainingById, updateTraining, deleteTraining } = require('../../service/MT/CRUDdaotao');


const getAllTrainingController = async (req, res) => {
  try {
    const daotao = await getAllTraining();
    res.json(daotao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createTrainingController = async (req, res) => {
  let {nametrain} = req.body;
  if (!nametrain) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const result = await connection.execute('INSERT INTO daotao (nametrain) VALUES (?)', [nametrain]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getTrainingByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const daotao = await getTrainingById(id);
    res.json(daotao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateTrainingController = async (req, res) => {
  const id = req.params.id;
  const {nametrain} = req.body;
  try {
    const result = await updateTraining(id, nametrain);
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteTrainingController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteTraining(id);
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllTrainingController, createTrainingController, getTrainingByIdController, updateTrainingController, deleteTrainingController };