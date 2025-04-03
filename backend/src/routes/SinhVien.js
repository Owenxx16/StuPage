const express = require('express');
const router = express.Router();
const {getAllSVController, createSVController, getSVControllerById, updateTSController, deleteSVController} = require('../controller/MT/SinhVien');


router.get('/', getAllSVController);
router.post('/', createSVController);
router.get('/:id', getSVControllerById);
router.put('/:id', updateTSController);
router.delete('/:id', deleteSVController);


module.exports = router;