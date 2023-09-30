const express = require('express');
const cors = require('cors');
const salesData = require('./data/salesData.json');
const app = express();

// Enable CORS for all routes
app.use(cors());

const fs = require('fs')
let jsonData = {}
fs.readFile('./data/salesData.json', 'utf-8', (err, data) => {
  if (err) throw err

  jsonData = JSON.parse(data)
})

// Define a sample API route
app.get('/api/transactions/all', (req, res) => {
  res.json(jsonData);
});

const port = 3001; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
