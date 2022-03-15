import React from "react";
import FavoritesQuotes from "../../FavoriteQuotes/FavoriteQuotes";
import Header from "../../Header/Header";

function MyFavorites() {
  return (
    <div className="container mx-auto">
      <Header header="Your Favorites" />
      <FavoritesQuotes />
    </div>
  );
}

export default MyFavorites;
