import React from 'react'
// import { quoteReducer } from '../redux/quote/quote.reducers'
import { useDispatch } from "react-redux";

import Modal from "react-modal";
import { useNavigate, useLocation } from "react-router-dom";
import "firebase/firestore";
import Quote from "./ListItem/Quote";
import { deleteQuote } from "../redux/quote/quote.actions";
import useAuthStatus from "../hooks/useAuthStatus";

const appElement = document.getElementById("content");
Modal.setAppElement(appElement);

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    backgroundColor: "#f2f2f2",
  },
};

function QuotesList() {
  const { loggedIn } = useAuthStatus();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (loggedIn) {
      if (window.confirm("Are you sure?")) {
        dispatch(deleteQuote(id));
      }
    } else {
      Console.log(location);
      navigate("/Login", { from: location });
    }
  };

  // const favHandler = (id) => {
  //   if (loggedIn) {
  //     console.log("fave!");
      // setIsOpen(true);
  //   } else {
  //     console.log(location);
  //     navigate("/Login", { from: location });
  //   }
  // };

  return (
    <div className="container mx-auto">
      <Quote
        // openModal={openModal}
        // favHandler={favHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default QuotesList;
