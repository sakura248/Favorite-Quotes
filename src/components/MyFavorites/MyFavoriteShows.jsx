import React from 'react'
import SearchBar from '../Filtering/SearchBar/SearchBar'
import Filter from '../Filtering/Filter/Filter'

import { db } from '../../firebase-config'


const MyFavoriteShows = () => {

  const API_KEY = process.env.REACT_APP_movieApi
  const searchWord = 'The+office'
  
  
  const getTvShowData = async() => {
    const url = 
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchWord}`
    // `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=The+office`
    // `https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher`
    console.log(url);
      await fetch(url)
      .then(result => result.json())
      .then(result => console.log(result))
      // .then(result => console.log(result.results[0].name))
      .catch(err => console.error(err))
  }

  // const testArr = []
  // Object.keys(queryTvShow).forEach(key => {
  //   return testArr.push(key)
    
  // })
  // console.log('queryTvShow',queryTvShow)
  // console.log('testArr',testArr)

  // console.log(favTvShowRef)
  // console.log(queryFavTvShow)




  const favoriteShowCollection = ['The Office', 'Parks and Rec']

  return (
    <div className="container mx-auto bg-white">
      <p>favorite shows ...</p>
      <div className="flex flex-row">
        <SearchBar />
        <Filter />
      </div>
      <h3>test</h3>
      {/* <p>{getTvShowData}</p> */}
      {/* <ul>
        {favoriteShowCollection.map((elm,id)=>(
        <li index={id}>
          {elm}
        </li>
        ))}
      </ul> */}
  {/* {queryFavTvShow} */}
    

    </div>
  )
}

export default MyFavoriteShows
