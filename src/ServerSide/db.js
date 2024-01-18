
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Connect to MongoDB
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Define a MongoDB schema
const FoodSchema = new mongoose.Schema({
  name: String,
  prize: String,
});


const FoodModel = mongoose.model('foods', FoodSchema);


// Define a route to fetch food data from MongoDB and render it in UI
app.get('/', async (req, res) => {
  try {
    // Fetch data from MongoDB
    const foodData = await FoodModel.find();
    console.log("show all data", foodData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
