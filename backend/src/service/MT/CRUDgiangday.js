const connection = require('../../config/database');

const getAllGiangDay = async () => {
  let [results, fields] = await connection.execute('Select * from giangday');
  return results;
}

const getGiangDayById = async (id) => {
  let [results, fields] = await connection.execute('Select * from giangday where id = ?', [id]);
  return results;
}

const updateGiangDay = async (id, upadate, image, title) => {
  let [results, fields] = await connection.execute('Update giangday set updated_at = ?, image = ?, title = ? where id = ?', [upadate,image, title, id]);
  return results;
}

const deleteGiangDay = async (id) => {
  let [results, fields] = await connection.execute('Delete from giangday where id = ?', [id]);
  return results;
}

module.exports = { getAllGiangDay, getGiangDayById, updateGiangDay, deleteGiangDay };