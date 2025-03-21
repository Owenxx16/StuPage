const connection = require('../../config/database');


const getAllFeedback = async () => {
  let [results, fields] = await connection.execute('Select * from feedback');
  return results;
}

const getFeedbackById = async (id) => {
  let [results, fields] = await connection.execute('Select * from feedback where id = ?', [id]);
  return results;
}

const deleteFeedback = async (id) => {
  let [results, fields] = await connection.execute('Delete from feedback where id = ?', [id]);
  return results;
}


module.exports = { getAllFeedback, getFeedbackById, deleteFeedback };