const connection = require('../../config/database')
const {getAllSuKien, getSuKienById, updateSuKien, deleteSuKien} = require('../../service/MT/CRUDsukien.js')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/assets'); // đảm bảo folder này tồn tại
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
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
    const hinh = req.file ? req.file.filename : null;
    let ngay = new Date().getDate();
    let {diachi, noidung, categoryId} = req.body;

    let [rows, fields] = await connection.execute('Insert into sukien (image,ngay,diachi,noidung,category_id) VALUES (?,?,?,?,?)', [hinh, ngay, diachi, noidung,categoryId])
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
    const image = req.file ? req.file.filename : null;
    let ngay = new Date().getDate();
    let {diachi,noidung} = req.body;

    const sukien = await updateSuKien(id,image,ngay,diachi,noidung);
    res.json({update: 'upadate successful'})
  }catch(error){
    res.status(500).json({message: error.message});
  }
}


const deleteSuKienController = async(req,res) => {
  try{
    let id = req.params.id;
    const sukien = await deleteSuKien(id);
    res.json({message: 'Xoa thanh cong'});
  }catch(error){
    res.status(500).json({message: error.message})
  }
}


module.exports = {getAllSuKienController,createSuKienController,getSuKienByIdController,updateSuKienByController,deleteSuKienController,upload}


