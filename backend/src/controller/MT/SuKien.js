const connection = require('../../config/database')
const {getAllSuKien, getSuKienById, updateSuKien, deleteSuKien} = require('../../service/MT/CRUDsukien.js')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})
const upload = multer({ storage: storage });

const getAllSuKienController = async(req,res) => {
  try{
    const sukien = await getAllSuKien();
    res.json(sukien);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

const createSuKienController = async(req,res) => {
  try{
    let hinh = req.file.filename;
    let ngay = new Date().getDate();
    let {diachi, noidung} = req.body;

    let [rows, fields] = await connection.execute('Insert into sukien (image,ngay,diachi,noidung) VALUES (?,?,?,?)', [hinh, ngay, diachi, noidung])
    res.json({ success: true, message: 'Insert thành công' });
  }catch(error){
    res.status(500).json({message: error.message});
  }
}


const getSuKienByIdController = async(req,res) => {
 try{
  let id = req.params.id;
  const sukien = await getSuKienById(id);
  res.json(sukien);
 }catch(error){
  res.status(500).message({message: error.message})
 }
}

const updateSuKienByController = async(req,res) => {
  try{
    let id = req.params.id;
    let image = req.file.filename;
    let ngay = new Date().getDate();
    let {diachi,noidung} = req.body;

    const sukien = await updateSuKien(id,image,ngay,diachi,noidung);
    res.message({update: 'upadate successful'})
  }catch(error){
    res.status(500).message({message: error.message});
  }
}


const deleteSuKienController = async(req,res) => {
  try{
    let id = req.params.id;
    const sukien = await deleteSuKien(id);
    res.message({message: 'Xoa thanh cong'});
  }catch(error){
    res.status(500).message({message: error.message})
  }
}


module.exports = {getAllSuKienController,createSuKienController,getSuKienByIdController,updateSuKienByController,deleteSuKienController,upload}


