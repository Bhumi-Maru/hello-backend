const express = require("express");
const {
  getAllRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
// const upload = require("../Middleware/uploadMiddleware");

const recipeRouter = express.Router();

// Get all recipes
recipeRouter.get("/", getAllRecipe);

// Create a new recipe
recipeRouter.post("/", createRecipe);

// Update a recipe by ID
recipeRouter.put("/:id", updateRecipe);

// Delete a recipe by ID
recipeRouter.delete("/:id", deleteRecipe);

module.exports = recipeRouter;
