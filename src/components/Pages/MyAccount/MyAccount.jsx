import React from "react";
import Sort from "../../Filtering/Sort/Sort";
// import SearchBar from "../../Filtering/SearchBar/SearchBar";
import Header from "../../Header/Header";
import QuotesList from "../../QuotesList";

function MyAccount() {
  return (
    <div className="mt-24 sm:mt-16 mx-auto w-11/12 sm:container">
      <Header header="Your Posts" />
      <div className="flex flex-row items-end">
        {/* <SearchBar /> */}
        <Sort />
      </div>
      <QuotesList type="account" />
    </div>
  );
}
export default MyAccount;
