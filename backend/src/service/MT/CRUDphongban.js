const connection = require('../../config/database');
const { get } = require('../../routes/khoa');


const getAllPhongBan = async () => {
  let [results, fields] = await connection.execute('Select * from department');
  return results;
}


const getPhongBanById = async (id) => {
  let [results, fields] = await connection.execute('Select * from department where id = ?', [id]);
  return results;
}


const updatePhongBan = async (id, tenKhoa) => {
  let [results, fields] = await connection.execute('Update department set tenPB = ? where id = ?', [tenKhoa, id]);
  return results;
}

const deletePhongBan = async (id) => {
  let [results, fields] = await connection.execute('Delete from department where id = ?', [id]);
  return results;
}

module.exports = { getAllPhongBan, getPhongBanById, updatePhongBan, deletePhongBan };
