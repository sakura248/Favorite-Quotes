import React from "react";
import Filter from "../Filtering/Filter/Filter";
// import SearchBar from "../Filtering/SearchBar/SearchBar";
import QuotesList from "../QuotesList";

function MyFavoriteQuotes() {
  return (
    <div className="container mx-auto">
      <p>favorite quote ...</p>
      <div className="flex flex-row">
        {/* <SearchBar /> */}
        <Filter />
      </div>
      <QuotesList type="fav" />
    </div>
  );
}

export default MyFavoriteQuotes;
