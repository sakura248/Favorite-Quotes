import React, { useState } from "react";
import Sort from "../Filtering/Sort/Sort";
import QuotesList from "../QuotesList";

function MyFavoriteQuotes() {
  const [order, setOrder] = useState("newest");
  const handleChange = (selectedOrder) => {
    setOrder(selectedOrder.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <Sort onChange={handleChange} />
      </div>
      <QuotesList type="fav" order={order} />
    </div>
  );
}

export default MyFavoriteQuotes;
