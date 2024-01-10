// foodModel.js

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  prize: String,
});


const FoodModel = mongoose.model('Food', foodSchema);

console.log("find by model" , FoodModel);

module.exports = FoodModel;
