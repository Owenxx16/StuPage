const express = require('express');
const router = express.Router();
const {getAllCamNangController, createCamNangController, getCamNangByIdController, updateCamNangController, deleteCamNangController,upload} = require('../controller/MT/CamNang');



router.get('/', getAllCamNangController);
router.post('/', upload.single('image'), createCamNangController);
router.get('/:id', getCamNangByIdController);
router.put('/:id', upload.single('image'), updateCamNangController);
router.delete('/:id', deleteCamNangController);

module.exports = router;

