/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import SearchBar from "../../Filtering/SearchBar/SearchBar";
import Sort from "../../Filtering/Sort/Sort";
import Hero from "../../Hero/Hero";
import QuotesList from "../../QuotesList";

function Index() {
  const [order, setOrder] = useState("newest");

  const handleChange = (selectedOrder) => {
    setOrder(selectedOrder.value);
  };
  return (
    <div>
      <Hero />
      <div className="flex flex-row justify-end mr-8">
        {/* <SearchBar /> */}
        <Sort onChange={handleChange} />
      </div>
      <QuotesList type="all" order={order} />
    </div>
  );
}

export default Index;
