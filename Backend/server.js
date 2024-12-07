const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const db = require("./config/db");
const cors = require("cors");
// const path = require("path");
const recipeRouter = require("./routes/recipeRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api/users", userRouter);
app.use("/api/recipe", recipeRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
