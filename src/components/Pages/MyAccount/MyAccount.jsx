import React, { useState } from "react";
import Sort from "../../Filtering/Sort/Sort";
import Header from "../../Header/Header";
import QuotesList from "../../QuotesList";

function MyAccount() {
  const [order, setOrder] = useState("newest");
  const handleChange = (selectedOrder) => {
    setOrder(selectedOrder.value);
  };

  return (
    <div className="mt-24 sm:mt-16 mx-auto w-11/12 sm:container">
      <Header header="Your Posts" />
      <div className="flex flex-row items-end">
        <Sort onChange={handleChange} />
      </div>
      <QuotesList type="account" order={order} />
    </div>
  );
}
export default MyAccount;
