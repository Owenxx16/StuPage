const connection = require('../../config/database');
const {getAllLienKet,getLienKetById,updateLienKet,deleteLienKet} = require('../../service/MT/CRUDlienket');
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


const getAllLienKetController = async(req,res) => {
  try{
    let sukien = await getAllLienKet();
    res.json(sukien);
  }catch(error){
    res.status(500).message({message: error.message});
  }
}

const createLienKetController = async(req,res) => {
  try{
    let image = req.file ? req.file.filename : null;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Missing file: image is required" });
    }

    const { sponsor, link } = req.body;
    if (!sponsor || !link) {
      return res.status(400).json({ success: false, message: "Missing required fields: sponsor and/or link" });
    }

    const [sukien] = await connection.execute(
      "INSERT INTO lienket (image, sponsor, link) VALUES (?, ?, ?)",
      [image, sponsor, link]
    );
    res.json({ success: true, message: 'Insert thành công' });
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const getLienKetByIdController = async(req,res) => {
  try{
    let id = req.params.id;
    let sukien = await getLienKetById(id);
    res.json(sukien);
  }catch(error){
    res.status(500).message({message: error.message});
  }
}


const updateLienKetController = async(req,res) =>{
  try{
    let id = req.params.id;
    let image = req.file ? req.file.filename : null;
    let {sponsor,link} = req.body;
    sponsor = sponsor !== undefined ? sponsor : null;
    link = link !== undefined ? link : null;

    let sukien = await updateLienKet(id,image,sponsor,link);
    res.json({success: true, message: "Cap nhat thanh cong"});
  }catch(error){
    res.status(500).json({message: error.message});
  }
}


const deleteLienKetController = async(req,res)=> {
  try{
    let id = req.params.id;
    let sukien = await deleteLienKet(id);
    res.json({message: "Xoa thanh cong"});
  }catch(error){
    res.status(500).message({message: error.message})
  }
}

const getAllLienKetByCategoryId = async(req,res) => {
  const categoryId = req.params.categoryId;
  try{
    let sukien = await connection.execute("SELECT * FROM lienket WHERE category_id = ?", [categoryId]);
    res.json(sukien[0]);
  }catch(error){
    res.status(500).message({message: error.message})
  }
}



module.exports={getAllLienKetController,createLienKetController,getLienKetByIdController,updateLienKetController,deleteLienKetController,upload, getAllLienKetByCategoryId}