import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import showsData from "../showsData.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: showsData,
      results: []
    };
  }

  handleShowSearch = term => {
    const results = this.state.shows.filter(show => {
      return show.name.toLowerCase().includes(term.toLowerCase());
    });
    this.setState({
      results: results.slice(0, 10)
    });
  };

  render() {
    return (
      <div>
        <SearchContainer
          onSearchTermChange={this.handleShowSearch}
          shows={this.state.results}
        />
      </div>
    );
  }
}

export default App;
