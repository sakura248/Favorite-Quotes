import React from "react";
import SearchBar from "../Filtering/SearchBar/SearchBar";
import Filter from "../Filtering/Filter/Filter";
import QuotesList from "../QuotesList";

function MyFavoriteQuotes() {
  return (
    <div className="container mx-auto bg-white">
      <p>favorite quote ...</p>
      <div className="flex flex-row">
        <SearchBar />
        <Filter />
      </div>
      <QuotesList />
    </div>
  );
};

export default MyFavoriteQuotes;
