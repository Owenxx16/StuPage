const express = require('express');
const router = express.Router();


const {getAllKhoaController, createKhoaController, getKhoaByIdController, updateKhoaController, deleteKhoaController} = require('../controller/MT/Khoa');

router.get('/', getAllKhoaController);
router.post('/', createKhoaController);
router.get('/:id', getKhoaByIdController);
router.put('/:id', updateKhoaController);
router.delete('/:id', deleteKhoaController);

module.exports = router;