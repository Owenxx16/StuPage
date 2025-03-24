const express = require('express');
const router = express.Router();

const {getAllChuongTrinhController, getChuongTrinhByIdController, createChuongTrinhController, updateChuongTrinhController, deleteChuongTrinhController} = require('../controller/MT/ChuongTrinh');

router.get('/', getAllChuongTrinhController);
router.get('/:id', getChuongTrinhByIdController);
router.post('/', createChuongTrinhController);
router.put('/:id', updateChuongTrinhController);
router.delete('/:id', deleteChuongTrinhController);

module.exports = router;