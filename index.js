const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@products.q5pma.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
console.log(uri);

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
        const productsCollection = client.db(process.env.DB).collection(process.env.COLLECTION);
        
        // Establish and verify connection
        await client.db(process.env.DB).command({ ping: 1 });
        console.log("Connected successfully to server");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});