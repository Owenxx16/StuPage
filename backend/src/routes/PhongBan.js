const express = require('express');
const router = express.Router();
const { getAllPhongban, getPhongbanById, createPhongban, updatePhongban, deletePhongban } = require('../controller/PhongBanContoller');

router.get('/', getAllPhongban);
router.get('/:id', getPhongbanById);
router.post('/', createPhongban);
router.put('/:id', updatePhongban);
router.delete('/:id', deletePhongban);

module.exports = router;