const connection = require('../../config/database');


const getAllDoanThe = async () => {
  let [results, fields] = await connection.execute('Select * from doanthe');
  return results;
}


const getDTById = async (id) => {
  let [results, fields] = await connection.execute('Select * from doanthe where id = ?', [id]);
  return results;
}


const updateDT = async (id, tenTS) => {
  let [results, fields] = await connection.execute('Update doanthe set name = ? where id = ?', [tenTS, id]);
  return results;
}

const deleteDT = async (id) => {
  let [results, fields] = await connection.execute('Delete from doanthe where id = ?', [id]);
  return results;
}

module.exports = { getAllDoanThe, getDTById, updateDT, deleteDT };
