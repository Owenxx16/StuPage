const express = require('express');
const router = express.Router();
const {getAllLienKetController,createLienKetController,getLienKetByIdController,updateLienKetController,deleteLienKetController,upload} = require('../controller/MT/LienKet');

router.get('/',getAllLienKetController);
router.post('/',createLienKetController);
router.get('/:id',getLienKetByIdController);
router.put('/:id',updateLienKetController);
router.delete('/:id',deleteLienKetController);


module.exports=router