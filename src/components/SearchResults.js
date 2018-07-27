import React from "react";
import ShowCard from "./ShowCard";

const SearchResults = props => {
  // Map over the results
  return props.shows.map(show => {
    return (
      <div key={show.id}>
        <ShowCard show={show}/>
      </div>
    );
  });
};

export default SearchResults;
