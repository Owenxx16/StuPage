const connection = require('../../config/database');


const getAllSinhVien = async () => {
  let [results, fields] = await connection.execute('Select * from sinhvien');
  return results;
}


const getSVById = async (id) => {
  let [results, fields] = await connection.execute('Select * from sinhvien where id = ?', [id]);
  return results;
}


const updateSV = async (id, tenTS) => {
  let [results, fields] = await connection.execute('Update sinhvien set name = ? where id = ?', [tenTS, id]);
  return results;
}

const deleteSV = async (id) => {
  let [results, fields] = await connection.execute('Delete from sinhvien where id = ?', [id]);
  return results;
}

module.exports = { getAllSinhVien, getSVById, updateSV, deleteSV };
