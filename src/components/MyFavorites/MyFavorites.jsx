import React from 'react'
import Header from '../Header/Header'
// import MyFavoriteShows from './MyFavoriteShows';
// import MyFavoritesQuote from './MyFavoritesQuote'

import {
  Link,
  Outlet
} from "react-router-dom";

const MyFavorites = () => {
  return (
    <div className="container mx-auto">
      <Header header={"Your Favorites"}/>
      <p>Favs...</p>
      <Link 
        to='/Myfavorites/MyFavoriteShows'
        className="hover:underline"
      >
        /Myfavorites/MyFavoriteShows
      </Link><br />
      <Link
        to='/Myfavorites/MyFavoriteQuotes'
        className="hover:underline"
      >
        /Myfavorites/MyFavoriteQuotes</Link><br />
      <Outlet />
    </div>
  )
}

export default MyFavorites
