const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect("mongodb://localhost:27017/self-hooooooooooo");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb connected...");
});
