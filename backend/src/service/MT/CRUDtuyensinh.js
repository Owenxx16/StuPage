const connection = require('../../config/database');


const getAllTuyenSinh = async () => {
  let [results, fields] = await connection.execute('Select * from tuyensinh');
  return results;
}


const getTSById = async (id) => {
  let [results, fields] = await connection.execute('Select * from tuyensinh where id = ?', [id]);
  return results;
}


const updateTS = async (id, tenTS) => {
  let [results, fields] = await connection.execute('Update tuyensinh set name = ? where id = ?', [tenTS, id]);
  return results;
}

const deleteTS = async (id) => {
  let [results, fields] = await connection.execute('Delete from tuyensinh where id = ?', [id]);
  return results;
}

module.exports = { getAllTuyenSinh, getTSById, updateTS, deleteTS };
