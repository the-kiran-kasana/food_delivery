const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const foodSchema = new mongoose.Schema({
  name: String,
  prize: String,
});

const Food = mongoose.model('Food', foodSchema);

app.get('/api/food', async (req, res) => {
  try {
    const data = await Food.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
