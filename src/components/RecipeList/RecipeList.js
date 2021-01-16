import React from "react";
import RecipeItem from "./RecipeItem/RecipeItem";

import classes from "./RecipeList.css";

const RecipeList = ({ recipes, onClickRecipe }) => {
  const renderedList = recipes.map((recipe) => {
    return (
      <RecipeItem
        key={recipe.recipe.uri}
        onClickRecipe={onClickRecipe}
        recipe={recipe}
      />
    );
  });

  return <div className={classes.RecipeList}>{renderedList}</div>;
};

export default RecipeList;
