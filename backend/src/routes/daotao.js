const express = require('express');
const router = express.Router();

const {getAllTrainingController, createTrainingController, getTrainingByIdController, updateTrainingController, deleteTrainingController} = require('../controller/MT/DaoTao');


router.get('/', getAllTrainingController);
router.post('/', createTrainingController);
router.get('/:id', getTrainingByIdController);
router.put('/:id', updateTrainingController);
router.delete('/:id', deleteTrainingController);


module.exports = router;