const express = require('express');
const mongoose = require('mongoose');

const app=express();
const port=3000;
mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
    name: String,
    prize: Number,
  });

const ExampleModel = mongoose.model('Example', exampleSchema);

app.get('/api/data', async (req, res) => {
    try {
      const data = await ExampleModel.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${PORT}`);
  });


  