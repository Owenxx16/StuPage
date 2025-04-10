const express = require('express');
const router = express.Router();

const {getAllFeedbackController, getFeedbackByIdController, createFeedbackController, deleteFeedbackController, getAllFeedBackByCategoryId} = require('../controller/MT/Feedback');


router.get('/', getAllFeedbackController);
router.post('/', createFeedbackController);
router.get('/:id', getFeedbackByIdController);
router.delete('/:id', deleteFeedbackController);


//get feedback by category id
router.get('/fbcate/:categoryId', getAllFeedBackByCategoryId);


module.exports = router;