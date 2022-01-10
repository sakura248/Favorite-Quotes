import React from 'react'
import Filter from '../Filtering/Filter.jsx/Filter'
import Header from '../Header/Header'
import QuotesList from '../QuotesList'
import SearchBar from '../Filtering/SearchBar/SearchBar'

const MyAccount = () => {
  return (
    <div className="container mx-auto">
      <Header header={"Your Posts"}/>
      <div className="flex flex-row">
        <SearchBar />
        <Filter />

      </div>
      <QuotesList />
    </div>
  )
}

export default MyAccount
