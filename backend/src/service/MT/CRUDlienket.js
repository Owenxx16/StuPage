const connection = require('../../config/database');

const getAllLienKet = async() => {
  let [results, fields] = await connection.execute("Select * from lienket");
  return results;
}

const getLienKetById = async(id) => {
  let [results, fields] = await connection.execute("Select * from lienket where id = ?",[id]);
  return results;
}

const updateLienKet = async(id,image,sponsor,link) => {
  let [results, fields] = await connection.execute("Update lienket set image = ? , sponsor = ? , link = ? where id = ?", [image,sponsor,link,id]);
  return results;
}


const deleteLienKet = async(id) => {
  let [results, fields] = await connection.execute("Delete from lienket where id = ? ", [id]);
  return results;
}


module.exports= {getAllLienKet,getLienKetById,updateLienKet,deleteLienKet}