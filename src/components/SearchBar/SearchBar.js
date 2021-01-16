import React, { Component } from "react";

import classes from "./SearchBar.css";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state.term);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className={classes.Example}
          style={{ margin: "auto", maxWidth: "300px", padding: "1%" }}
        >
          <input
            type="text"
            placeholder="Search Recipes..."
            name="search2"
            onChange={this.onInputChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
