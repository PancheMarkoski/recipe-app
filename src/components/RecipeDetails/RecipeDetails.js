import React, { Fragment } from "react";

import classes from "./RecipeDetails.css";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipeDetails = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <p>Loading....</p>;
  }

  return (
    <Fragment>
      <div className={classes.RecipeDetails}>
        <div
          style={{
            backgroundImage: `linear-gradient(
          to right bottom,
          hsla(187, 10%, 70%, 0.601),
          hsla(195, 4%, 21%, 0.601)
        ) ,url(${selectedRecipe.recipe.image})`,
          }}
          className={classes.RecipeImg}
        ></div>

        <h1>{selectedRecipe.recipe.label}</h1>

        <RecipeItem
          selectedRecipeKey={selectedRecipe.recipe.uri}
          selectedRecipe={selectedRecipe}
        />

        <div className={classes.Footer}>
          <p>calories: {selectedRecipe.recipe.calories}</p>
          <p>Author: {selectedRecipe.recipe.source}</p>
          <p>Time: {selectedRecipe.recipe.totalTime}m</p>
        </div>
        <button>
          <a href={selectedRecipe.recipe.url}>Visit Recipe WebSite</a>
        </button>
      </div>
    </Fragment>
  );
};

export default RecipeDetails;
