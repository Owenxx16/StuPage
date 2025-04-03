const express = require('express');
const router = express.Router();
const {getAllDTController, createDTController, getDTControllerById, updateDTController, deleteDTController} = require('../controller/MT/DoanThe');


router.get('/', getAllDTController);
router.post('/', createDTController);
router.get('/:id', getDTControllerById);
router.put('/:id', updateDTController);
router.delete('/:id', deleteDTController);


module.exports = router;