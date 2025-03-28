const express = require('express');
const router = express.Router();
const {getAllHocthiController,
  getHocthiByIdController,
  createHocthiController,
  updateHocthiController,
  deleteHocthiController,
  upload} = require('../controller/MT/HocThi');


router.get('/', getAllHocthiController);
router.post('/', upload.single('image'), createHocthiController);
router.get('/:id', getHocthiByIdController);
router.put('/:id', upload.single('image'), updateHocthiController);
router.delete('/:id', deleteHocthiController);

module.exports = router;