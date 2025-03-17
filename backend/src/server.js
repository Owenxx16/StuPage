const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');


// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
} 
);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});