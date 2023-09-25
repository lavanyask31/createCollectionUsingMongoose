// Require the mongoose module
const mongoose = require("mongoose");

// Path to our cloud DataBase
const url = "mongodb://localhost:27017/GFG";

// Connecting to database
mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then((ans) => {
    console.log("Connected Successful");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });

// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
// And making indexes using mobile
const collection_structure = new Schema({
  name: {
    type: String,
    require: true,
  },
  marks: {
    type: Number,
    default: 0,
  },
  mobile: {
    type: Number,
    index: true,
    require: true,
  },
});

// Creating collection
const collections = mongoose.model("Person2", collection_structure);

collections
  .create({
    name: `Sam Snehil`,
    marks: 88,
    mobile: 9338948473,
  })
  .then((ans) => {
    console.log("Document inserted");
  })

  .catch((err) => {
    console.log(err);
  });
