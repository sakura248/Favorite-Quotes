import React, { useState } from 'react'
import Filter from '../Filtering/Filter/Filter'
import Header from '../Header/Header'
import QuotesList from '../QuotesList'
import SearchBar from '../Filtering/SearchBar/SearchBar'
import {useAuthStatus} from '../../Hooks/useAuthStatus'
import { useNavigate } from "react-router"
// import { auth } from '../../firebase-config'
// import { onAuthStateChanged } from 'firebase/auth'

const MyAccount = () => {

  let navigate = useNavigate();
  const {loggedIn} = useAuthStatus()
  if(!loggedIn) return navigate('/Login')


  return (
    <div className="container mx-auto">
      <Header header={"Your post"}/>
      <div className="flex flex-row">
        <SearchBar />
        <Filter />

      </div>
      <QuotesList />
    </div>
  )
}

export default MyAccount
