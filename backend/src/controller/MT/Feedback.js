const connection = require('../../config/database');
const { getAllFeedback, getFeedbackById, deleteFeedback } = require('../../service/MT/CRUDfeedback');
const { sendSuccess, sendError } = require('../../utils/response');

const getAllFeedbackController = async (req, res) => {
  try {
    const feedback = await getAllFeedback();
    sendSuccess(res, 'Feedback fetched successfully', feedback);
  } catch (error) {
    sendError(res, error.message);
  }
};

const getFeedbackByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await getFeedbackById(id);
    sendSuccess(res, 'Feedback fetched successfully', feedback);
  } catch (error) {
    sendError(res, error.message);
  }
};

const createFeedbackController = async (req, res) => {
  let { name, phone, address, title, content } = req.body;
  if (!name || !phone || !address || !title || !content) {
    return sendError(res, 'Missing required fields', 400);
  }
  if (!phone.startsWith('0') || phone.length !== 10) {
    return sendError(res, 'Invalid phone number', 400);
  }
  try {
    const result = await connection.execute(
      'INSERT INTO feedback (name, phone, address, title, content) VALUES (?, ?, ?, ?, ?)',
      [name, phone, address, title, content]
    );
    sendSuccess(res, 'Insert thành công', { insertId: result.insertId });
  } catch (error) {
    sendError(res, error.message);
  }
};

const deleteFeedbackController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteFeedback(id);
    sendSuccess(res, 'Delete thành công', { affectedRows: result.affectedRows });
  } catch (error) {
    sendError(res, error.message);
  }
};

const getAllFeedBackByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const [feedback] = await connection.execute('SELECT * FROM feedback WHERE category_id = ?', [categoryId]);
    sendSuccess(res, 'Feedback fetched successfully', feedback);
  } catch (error) {
    sendError(res, error.message);
  }
};

module.exports = { 
  getAllFeedbackController, 
  getFeedbackByIdController, 
  createFeedbackController, 
  deleteFeedbackController, 
  getAllFeedBackByCategoryId 
};