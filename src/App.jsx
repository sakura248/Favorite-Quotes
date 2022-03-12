import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import QuotesList from "./components/QuotesList";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import MyAccount from "./components/MyAccount/MyAccount";
import MyFavorites from "./components/MyFavorites/MyFavorites";
import MyFavoriteShows from "./components/MyFavorites/MyFavoriteShows";
import MyFavoriteQuotes from "./components/MyFavorites/MyFavoriteQuotes";
import StickFooter from "./components/StickFooter";
import Index from "./components/Pages/Index/Index";
import NotFound from "./components/Pages/NotFound/NotFound";

import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <Router>
      <PrivateRoute>
        <div className="App">
          <StickFooter />
          <Navigation />
          <Routes>
            <Route index element={<Index />} />
            <Route element={<QuotesList isPrivate={false} />} />
            <Route path="MyAccount" element={<MyAccount />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="MyFavorites" element={<MyFavorites />}>
              <Route path="MyFavoriteShows" element={<MyFavoriteShows />} />
              <Route path="MyFavoriteQuotes" element={<MyFavoriteQuotes />} />
            </Route>
            {/* Loading prepare */}
            {/* <React.Suspense fallback={<>...</>}>
                  <Dashboard />
                </React.Suspense> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PrivateRoute>
    </Router>
  );
}

export default App;
