import React from 'react'
import Header from "../Header/Header";
import SearchBar from "../Filtering/SearchBar/SearchBar";
import Filter from "../Filtering/Filter/Filter";
import QuotesList from "../QuotesList";

function MyAccount() {
  return (
    <div className="container mx-auto">
      <Header header="Your post" />
      <div className="flex flex-row">
        <SearchBar />
        <Filter />
      </div>
      <QuotesList />
    </div>

  )
}
export default MyAccount;
