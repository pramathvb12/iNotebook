const mongoose = require("mongoose"); // importing mongo
const { Schema } = mongoose; //import schema
const UserSchema = new Schema({
  //Creating usewr schema contains name, email, password vand date.
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//exporting user schema
const User = mongoose.model("user", UserSchema);
module.exports = User;
