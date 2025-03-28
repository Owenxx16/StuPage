const connection = require('../../config/database');


const getAllCamNang = async () => {
  let [results, fields] = await connection.execute('Select * from camnang');
  return results;
}


const getCamNangById = async (id) => {
  let [results, fields] = await connection.execute('Select * from camnang where id = ?', [id]);
  return results;
}


const updateCamNang = async (id, updated, head,body,footer,altimg,image, link,category_id ) => {
  let [results, fields] = await connection.execute('Update camnang set updated_at = ?, head = ?, body = ?, footer = ?, altimg = ?, image = ?, link = ?, category_id = ? where id = ?', [updated, head, body, footer, altimg, image, link, category_id, id]);
  return results;
}


const deleteCamNang = async (id) => {
  let [results, fields] = await connection.execute('Delete from camnang where id = ?', [id]);
  return results;
}

module.exports = { getAllCamNang, getCamNangById, updateCamNang, deleteCamNang };