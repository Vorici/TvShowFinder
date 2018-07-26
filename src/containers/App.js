import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      // selectedShow: null,
    };

    const startTime = new Date();
    fetch('http://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((shows) =>
        this.setState({
          shows,
        })
      )
      .then((endTime) => {
        const finalTime = new Date();
        console.log(finalTime.getTime() - startTime.getTime());
      });
  }
  componentDidMount() {}
  getDataFromShowSearch = (term) => {
    // fetch and set shows state
    console.log(term);
  };

  handleShowSearch = (term) => {
    this.getDataFromShowSearch(term);
  };

  render() {
    console.log(this.state.shows);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={this.handleShowSearch} />
      </div>
    );
  }
}

export default App;
