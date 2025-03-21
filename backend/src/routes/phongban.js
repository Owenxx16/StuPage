const express = require('express');
const router = express.Router();
const {getAllPhongBanController, createPhongBanController, getPhongBanByIdController, updatePhongBanController, deletePhongBanController} = require('../controller/MT/PhongBan');

router.get('/', getAllPhongBanController);
router.post('/', createPhongBanController);
router.get('/:id', getPhongBanByIdController);
router.put('/:id', updatePhongBanController);
router.delete('/:id', deletePhongBanController);


module.exports = router;