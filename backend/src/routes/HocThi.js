const express = require('express');
const router = express.Router();
const {getAllHocthiController,
  getHocthiByIdController,
  createHocthiController,
  updateHocthiController,
  deleteHocthiController,
  getAllHocthiByCategoryId,
  upload} = require('../controller/MT/HocThi');


router.get('/', getAllHocthiController);
router.post('/', upload.single('image'), createHocthiController);
router.get('/:id', getHocthiByIdController);
router.put('/:id', upload.single('image'), updateHocthiController);
router.delete('/:id', deleteHocthiController);

//get hocthi by category id
router.get('/hocthicate/:categoryId', getAllHocthiByCategoryId);

module.exports = router;