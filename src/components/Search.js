import React from "react";

function Search({handleOnChangeSearch}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChangeSearch}
      />
    </div>
  );
}

export default Search;
