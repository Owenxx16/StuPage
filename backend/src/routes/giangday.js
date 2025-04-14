const express = require('express');
const router = express.Router();

const {getAllGiangDayController, createGiangDayController, getGiangDayByIdController, upadateGiangDayController, deleteGiangDayController, upload} = require('../controller/MT/GiangDay');

router.get('/', getAllGiangDayController);
router.post('/', upload.single('image') ,createGiangDayController);
router.get('/:id', getGiangDayByIdController);
router.put('/:id', upload.single('image'), upadateGiangDayController);
router.delete('/:id', deleteGiangDayController);

module.exports = router;