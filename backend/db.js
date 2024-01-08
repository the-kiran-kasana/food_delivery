
 const mongoose = require('mongoose');

 const mongoURL="mongodb+srv://kkasanacoder:<enjoyfood123>@cluster0.u8hyb4f.mongodb.net/?retryWrites=true&w=majority"
 
 const mongoDB = async() =>{
 await mongoose.connect(mongoURL,()=>{
    serverSelectionTimeoutMS: 8080
    console.log("connected successfully");
  });
 }

module.exports=mongoDB; 


