const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModel = require('./foodModel'); 


app.use(express.json());


mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/api/foods', async (req, res) => {
  try {
    const foods = await FoodModel.find().exec(); 
    console.log("check by find", foods);
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
