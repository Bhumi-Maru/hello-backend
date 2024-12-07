const recipeModel = require("../model/recipe");

const getAllRecipe = async (req, res) => {
  try {
    const data = await recipeModel.find();

    return res.status(201).json({
      message: "Fetched all recipes",
      recipe: data,
    });
  } catch (error) {
    console.log("get recipe error", error);
    res.status(400).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, image } = req.body;

    const recipe = await recipeModel.create({
      title,
      description,
      ingredients,
      steps,
      image,
    });

    return res.status(201).json({
      message: "Recipe created",
      recipe,
    });
  } catch (error) {
    console.log("create recipe error", error);
    res.status(400).json({ message: error.message });
  }
};

// Update Recipe
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params; // Get recipe ID from request parameters
    const { title, description, ingredients, steps, image } = req.body;

    const updatedRecipe = await recipeModel.findByIdAndUpdate(
      id,
      { title, description, ingredients, steps, image },
      { new: true } // Return the updated document
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json({
      message: "Recipe updated",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.log("update recipe error", error);
    res.status(400).json({ message: error.message });
  }
};

// Delete Recipe
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params; // Get recipe ID from request parameters

    const deletedRecipe = await recipeModel.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json({
      message: "Recipe deleted",
      recipe: deletedRecipe,
    });
  } catch (error) {
    console.log("delete recipe error", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllRecipe, createRecipe, updateRecipe, deleteRecipe };
