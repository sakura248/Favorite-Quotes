import React from "react";
// import { quoteReducer } from '../redux/quote/quote.reducers'
import { useDispatch } from "react-redux";

import Modal from "react-modal";
import { useNavigate, useLocation } from "react-router-dom";
import "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import Quote from "./ListItem/Quote";
// import { deleteQuote } from "../redux/quote/quote.actions";
import useAuthStatus from "../hooks/useAuthStatus";
import { quotesRef } from "../firebase-config";

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
  const { loggedIn, uid } = useAuthStatus();
  const location = useLocation();
  const navigate = useNavigate();

  // const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (loggedIn) {
      if (window.confirm("Are you sure?")) {
        const targetRef = doc(quotesRef, id);
        deleteDoc(targetRef);

        dispatch({ type: "DELETE_QUOTE", id });
      }
    } else {
      Console.log(location);
      navigate("/Login", { from: location });
    }
  };

  const favHandler = (quoteId) => {
    if (loggedIn) {
      console.log("fave!", quoteId, uid);
      // const data = favoriteQuoteSnapShot();
      // console.log(data.quoteId);
      // if(quoteId === id)
      // setIsLiked(true);
      // setIsFaved(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    // setIsOpen(true);
    // } else {
    //   console.log(location);
    //   navigate("/Login", { from: location });
    // }
  };

  return (
    <div className="container mx-auto">
      <Quote
        // openModal={openModal}
        // isLiked={isLiked}
        favHandler={favHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default QuotesList;
