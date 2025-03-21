const connection = require('../../config/database');


const getAllKhoa = async () => {
  let [results, fields] = await connection.execute('Select * from khoa');
  return results;
}


const getKhoaById = async (id) => {
  let [results, fields] = await connection.execute('Select * from khoa where id = ?', [id]);
  return results;
}


const updateKhoa = async (id, tenKhoa) => {
  let [results, fields] = await connection.execute('Update khoa set name = ? where id = ?', [tenKhoa, id]);
  return results;
}

const deleteKhoa = async (id) => {
  let [results, fields] = await connection.execute('Delete from khoa where id = ?', [id]);
  return results;
}

module.exports = { getAllKhoa, getKhoaById, updateKhoa, deleteKhoa };
