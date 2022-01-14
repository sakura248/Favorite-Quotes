import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import QuotesList from './components/QuotesList'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import MyAccount from './components/MyAccount/MyAccount'
import MyFavorites from './components/MyFavorites/MyFavorites'
import StickFooter from './components/StickFooter'



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
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
          <Route path="MyAccount" element={<MyAccount />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="SignUp" element={<SignUp />}/>
          <Route path="MyFavorites" element={<MyFavorites />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

function NoMatch(){
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
