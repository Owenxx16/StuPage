const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const categoriesRouter = require('./routes/CategoriesRoute.js');
const userRouter = require('./routes/UsersRoute.js');
const NewsRouter = require('./routes/NewsRoute.js');
const NewsContentRouter = require('./routes/News_contentRoute.js');
// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Routes
//app.use('/news', newsRouter);
app.use('/categories', categoriesRouter);
app.use('/user', userRouter);
app.use('/news', NewsRouter);
app.use('/news_content', NewsContentRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});