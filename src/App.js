import React, { Component } from "react";
import Edamam from "./apis/Edamam";

import classes from "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: null,
  };

  componentDidMount() {
    this.onSubmitHandler("Cupcakes");
  }

  onSubmitHandler = async (recipe) => {
    const response = await Edamam.get("/search", {
      params: {
        q: recipe,
      },
    });

    this.setState({
      recipes: response.data.hits.slice(0, 6),
      selectedRecipe: response.data.hits[0],
    });
    console.log(response.data.hits[0].recipe);
  };

  onClickRecipe = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.AppLeftSide}>
          <SearchBar onSubmitHandler={this.onSubmitHandler} />
          <RecipeList
            onClickRecipe={this.onClickRecipe}
            recipes={this.state.recipes}
          />
        </div>
        <div>
          <RecipeDetails selectedRecipe={this.state.selectedRecipe} />
        </div>
      </div>
    );
  }
}

export default App;
