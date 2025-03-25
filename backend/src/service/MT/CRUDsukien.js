const connection = require('../../config/database');


const getAllSuKien = async () => {
  let [rows, fields] = await connection.execute("Select * from sukien");
  return rows;
}


const getSuKienById = async(id) => {
  let [rows, fields] = await connection.execute("Select * from sukien where id = ?",[id])
  return rows;
}


const updateSuKien = async (id, hinh, ngay, diachi, noidung) => {
  let [rows, fields] = await connection.execute("Update sukien set image = ? , ngay = ? , diachi = ? , noidung = ? where id = ?", [hinh, ngay, diachi, noidung, id])
  return rows;
}

const deleteSuKien = async (id) => {
  let [rows, fields] = await connection.execute("Delete from sukien where id = ?", [id]);
  return rows;
}


module.exports = {getAllSuKien, getSuKienById, updateSuKien, deleteSuKien};

