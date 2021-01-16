import React from "react";

import classes from "./RecipeItem.css";

const RecipeItem = ({ recipe, onClickRecipe }) => {
  return (
    <div onClick={() => onClickRecipe(recipe)} className={classes.RecipeItem}>
      <img alt="recipe" src={recipe.recipe.image} />
      <div className={classes.Title}>
        <h5>{recipe.recipe.label}</h5>
      </div>
    </div>
  );
};

export default RecipeItem;
