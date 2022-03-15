import React from "react";
import FavoritesQuotes from "../../FavoriteQuotes/FavoriteQuotes";
import Header from "../../Header/Header";

function MyFavorites() {
  return (
    <div className="mt-24 sm:mt-16 mx-auto w-11/12 sm:container">
      <Header header="Your Favorites" />
      <FavoritesQuotes />
    </div>
  );
}

export default MyFavorites;
