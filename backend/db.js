const mongoose = require("mongoose"); //taking mongoose
// const mongoUrl = "mongodb://127.0.0.1:27017/inote?directConnection=true"; // connecting to our mongo url localhost
const mongoUrl =
  "mongodb+srv://pkgfdasj1:pdas12345@cluster0.mnnsdp0.mongodb.net/"; // connecting to our mongo url to cloud
//Connecting db
const connectMongo = () => {
  mongoose.connect(mongoUrl, () => {
    console.log("Connected to db");
  });
};
//exporting function
module.exports = connectMongo;
