import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import QuotesList from './components/QuotesList'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import MyAccount from './components/MyAccount/MyAccount'
import MyFavorites from './components/MyFavorites/MyFavorites'
import MyFavoriteShows from './components/MyFavorites/MyFavoriteShows'
import MyFavoriteQuotes from './components/MyFavorites/MyFavoriteQuotes'
import StickFooter from './components/StickFooter'
import NotFound from './components/NotFound/NotFound'

import { auth } from './firebase-config'
import PrivateRoute from './components/routes/PrivateRoute'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  useLocation,
  Navigate
} from "react-router-dom";

function App() {
  // const { loggedIn } = useAuthStatus()

  return (
    <Router>
      <div className="App">
        <StickFooter  />
        <Navigation />
        <Routes>
          <Route index element={<QuotesList />} />
          {/* <Route path="MyAccount" element={<MyAccount />}/> */}
          <Route
            path="MyAccount"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          />
          <Route path="Login" element={<Login />}/>
          <Route path="SignUp" element={<SignUp />}/>
          <Route path="MyFavorites" element={<MyFavorites />}>
            <Route path="MyFavoriteShows" element={<MyFavoriteShows />}/>
            <Route path="MyFavoriteQuotes" element={<MyFavoriteQuotes />}/>
          </Route>
          

          {/* Loading prepare */}
          {/* <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense> */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
