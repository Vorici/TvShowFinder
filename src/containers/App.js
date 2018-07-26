import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      // selectedShow: null,
    };
  }

  getDataFromShowSearch = (term) => {
    // fetch and set shows state
    console.log(term);
  };

  handleShowSearch = (term) => {
    this.getDataFromShowSearch(term);
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={this.handleShowSearch} />
      </div>
    );
  }
}

export default App;
