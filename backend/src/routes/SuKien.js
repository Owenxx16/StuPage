const express = require('express');
const router = express.Router();

const {getAllSuKienController,createSuKienController,getSuKienByIdController,updateSuKienByController,deleteSuKienController,upload} = require('../controller/MT/SuKien');

//Notes
// Nếu sai upload sửa lại đường truyền assets?
router.get('/',getAllSuKienController);
router.post('/',upload.single('hinh'),createSuKienController);
router.put('/:id',upload.single('hinh'),updateSuKienByController);
router.get('/:id',getSuKienByIdController);
router.delete('/:id',deleteSuKienController);

module.exports = router;