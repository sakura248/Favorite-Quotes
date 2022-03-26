import React from "react";
// import SearchBar from "../../Filtering/SearchBar/SearchBar";
import Filter from "../../Filtering/Filter/Filter";
import Hero from "../../Hero/Hero";
import QuotesList from "../../QuotesList";

function Index() {
  return (
    <div>
      <Hero />
      <div className="flex flex-row justify-end mr-8">
        {/* <SearchBar /> */}
        <Filter />
      </div>
      <QuotesList type="all" />
    </div>
  );
}

export default Index;
