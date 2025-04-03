const express = require('express');
const router = express.Router();
const {getAllTSController, createTSController, getTSControllerById, updateTSController, deleteTSController} = require('../controller/MT/TuyenSinh');


router.get('/', getAllTSController);
router.post('/', createTSController);
router.get('/:id', getTSControllerById);
router.put('/:id', updateTSController);
router.delete('/:id', deleteTSController);

module.exports = router;