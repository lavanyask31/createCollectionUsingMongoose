const mongoose = require("mongoose");

//database connection path
const url = "mongodb://localhost:27017/GFG";

// database connection
mongoose
  .connect(url)
  .then((ans) => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Error in the connection");
  });

//    Schema class
const Schema = mongoose.Schema;

// collection structure

const collection_structure = new Schema({
  name: String,
  marks: Number,
});

//  collection create

const collections = mongoose.model("Person1", collection_structure);
//document insert
collections
  .create({
    name: "qwerty",
    marks: 12,
  })
  .then((ans) => {
    console.log("Document inserted");
  })
  .catch((err) => {
    console.log(err.Message);
  });
