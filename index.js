const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000 || process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});