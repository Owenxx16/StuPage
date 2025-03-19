const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const newsRouter = require('./routes/news.js');


// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/news', newsRouter);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});