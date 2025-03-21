const express = require('express');
const router = express.Router();

const {getAllFeedbackController, getFeedbackByIdController, createFeedbackController, deleteFeedbackController} = require('../controller/MT/Feedback');


router.get('/', getAllFeedbackController);
router.post('/', createFeedbackController);
router.get('/:id', getFeedbackByIdController);
router.delete('/:id', deleteFeedbackController);


module.exports = router;