import React from "react";

import classes from "./RecipeItem.css";

const RecepiIngredientsList = ({ selectedRecipe, selectedRecipeKey }) => {
  if (!selectedRecipe) {
    return <p>Loading...</p>;
  }

  const ingredients = selectedRecipe.recipe.ingredientLines.map((ing) => {
    return <li>{ing}</li>;
  });
  return (
    <ul className={classes.RecipeItem}>
      <div>
        <h3>Ingredients</h3>
        {ingredients}
      </div>
    </ul>
  );
};

export default RecepiIngredientsList;
