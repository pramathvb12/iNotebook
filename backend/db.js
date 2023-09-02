const mongoose = require("mongoose"); //taking mongoose
const mongoUrl = "mongodb://127.0.0.1:27017/inote?directConnection=true"; // connecting to our mongo url

//Connecting db
const connectMongo = () => {
  mongoose.connect(mongoUrl, () => {
    console.log("Connected to db");
  });
};
//exporting function
module.exports = connectMongo;
