const express = require('express');
const router = express.Router();
const {getAllLienKetController,createLienKetController,getLienKetByIdController,updateLienKetController,deleteLienKetController,upload, getAllLienKetByCategoryId} = require('../controller/MT/LienKet');

router.get('/',getAllLienKetController);
router.post('/',upload.single('image'),createLienKetController);
router.get('/:id',getLienKetByIdController);
router.put('/:id',updateLienKetController);
router.delete('/:id',deleteLienKetController);

//get lienket by category id
router.get('/lienketcate/:categoryId', getAllLienKetByCategoryId);


module.exports=router