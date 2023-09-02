const mongoose = require("mongoose"); // importing mongoose
const { Schema } = mongoose; // importing schemas
const NotesSchema = new Schema({
  //creating a variables inside mongo namely title, description, tag and date.
  user: {
    //As foreign key in SQL connecting user schema
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//exporting model
module.exports = mongoose.model("notes", NotesSchema);
