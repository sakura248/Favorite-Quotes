import React from "react";
import Sort from "../Filtering/Sort/Sort";
// import SearchBar from "../Filtering/SearchBar/SearchBar";
import QuotesList from "../QuotesList";

function MyFavoriteQuotes() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        {/* <SearchBar /> */}
        <Sort />
      </div>
      <QuotesList type="fav" />
    </div>
  );
}

export default MyFavoriteQuotes;
