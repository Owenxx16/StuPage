const connection = require('../../config/database');


const getAllChuongTrinh = async () => {
  let [results, fields] = await connection.execute('Select * from chuongtrinh');
  return results;
}

const getChuongTrinhById = async (id) => {
  let [results, fields] = await connection.execute('Select * from chuongtrinh where id = ?', [id]);
  return results;
}


const updateChuongTrinh = async (id, updated, content, link) => {
  let [results, fields] = await connection.execute('Update chuongtrinh set updated_at , content , link where id = ?', [updated, content, link, id]);
  return results;
}

const deleteChuongTrinh = async (id) => {
  let [results, fields] = await connection.execute('Delete from daotao where id = ?', [id]);
  return results;
}


module.exports = { getAllChuongTrinh, getChuongTrinhById, updateChuongTrinh, deleteChuongTrinh };