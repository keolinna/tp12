const mongoose = require('mongoose')
require("dotenv").config();

const uri= "mongodb://localhost:27017/test";
const option = {
  autoIndex:false,
  maxPoolsize:10,
  serverSelectionTimeoutMS:5000,
  socketTimeoutMS:45000,
  family:4
};
const connectDB = (url) => {
  return mongoose.connect(uri,option)
}
module.exports = connectDB;
