const sendSuccess = (res, message, data, status = 200) => {
  return res.status(status).json({
    status,
    message,
    data
  });
};

const sendError = (res, message, status = 500) => {
  return res.status(status).json({
    status,
    message,
    data: null
  });
};

module.exports = { sendSuccess, sendError };