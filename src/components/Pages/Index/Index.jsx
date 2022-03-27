import React, { useState } from "react";
// import SearchBar from "../../Filtering/SearchBar/SearchBar";
import Sort from "../../Filtering/Sort/Sort";
import Hero from "../../Hero/Hero";
import QuotesList from "../../QuotesList";

function Index() {
  const [sortNum, setSortNum] = useState(1);
  const onChangeSort = (e) => {
    console.log(e.target.value);
    setSortNum(e.target.value);
  };
  return (
    <div>
      <Hero />
      <div className="flex flex-row justify-end mr-8">
        {/* <SearchBar /> */}
        <Sort onChange={onChangeSort} />
      </div>
      <QuotesList type="all" sortNum={sortNum} />
    </div>
  );
}

export default Index;
