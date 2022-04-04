import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navigation from "./components/Navigation/Navigation";
import Index from "./components/Pages/Index/Index";
import MyAccount from "./components/Pages/MyAccount/MyAccount";
import MyFavorites from "./components/Pages/MyFavorites/MyFavorites";
import NotFound from "./components/Pages/NotFound/NotFound";
import QuotesList from "./components/QuotesList";
import PrivateRoute from "./components/routes/PrivateRoute";
import StickFooter from "./components/StickFooter";

function App() {
  return (
    <Router>
      <PrivateRoute>
        <div className="App">
          <StickFooter />
          <Navigation />
          <Routes>
            <Route index element={<Index />} />
            <Route element={<QuotesList />} />
            <Route path="MyAccount" element={<MyAccount />} />
            <Route path="MyFavorites" element={<MyFavorites />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
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
