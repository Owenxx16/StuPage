const connection = require('../../config/database');
const {getAllFeedback, getFeedbackById, deleteFeedback} = require('../../service/MT/CRUDfeedback');


const getAllFeedbackController = async (req, res) => {
  try {
    const feedback = await getAllFeedback();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getFeedbackByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await getFeedbackById(id);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createFeedbackController = async (req, res) => {
  let {name, phone, address,title,content} = req.body;
  if (!name || !phone || !address || !title || !content) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (!phone.startsWith('0') || phone.length !== 10) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }
  try {
    const result = await connection.execute('INSERT INTO feedback (name, phone, address, title, content) VALUES (?, ?, ?, ?, ?)', [name, phone, address, title, content]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  const deleteFeedbackController = async (req, res) => {
    let id = req.params.id;
    try {
      const result = await deleteFeedback(id);
      res.json({ success: true, message: 'Delete thành công' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

// This function retrieves all feedback for a specific category by its ID
// It uses the category ID from the request parameters to filter the feedback
const getAllFeedBackByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const feedback = await connection.execute('SELECT * FROM feedback WHERE category_id = ?', [categoryId]);
    res.json(feedback[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { getAllFeedbackController, getFeedbackByIdController, createFeedbackController, deleteFeedbackController, getAllFeedBackByCategoryId };