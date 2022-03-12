import React from "react";
import Hero from "../../Hero/Hero";
import QuotesList from "../../QuotesList";
// import SearchBar from "../../Filtering/SearchBar/SearchBar";
import Filter from "../../Filtering/Filter/Filter";

function Index() {
  return (
    <div>
      <Hero />
      <div className="flex flex-row justify-end mr-8">
        {/* <SearchBar /> */}
        <Filter />
      </div>
      <QuotesList isPrivate={false} />
    </div>
  );
}

export default Index;
