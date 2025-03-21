const connection = require('../../config/database');

const getAllTraining = async () => {
  let [results, fields] = await connection.execute('Select * from daotao');
  return results;
}

const getTrainingById = async (id) => {
  let [results, fields] = await connection.execute('Select * from daotao where id = ?', [id]);
  return results;
}


const updateTraining = async (id, nametrain) => {
  let [results, fields] = await connection.execute('Update daotao set nametrain = ? where id = ?', [nametrain, id]);
  return results;
}

const deleteTraining = async (id) => {
  let [results, fields] = await connection.execute('Delete from daotao where id = ?', [id]);
  return results;
}

module.exports = { getAllTraining, getTrainingById, updateTraining, deleteTraining };