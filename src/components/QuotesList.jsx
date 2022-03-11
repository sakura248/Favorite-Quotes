/* eslint-disable no-unused-vars */
import React from "react"; // useState
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { useNavigate, useLocation } from "react-router-dom";
import "firebase/firestore";
import {
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import Quote from "./ListItem/Quote";
import useAuthStatus from "../hooks/useAuthStatus";
import { quotesRef, favoriteQuotesRef } from "../firebase-config";

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

function QuotesList({ isPrivate }) {
  const { loggedIn, uid } = useAuthStatus();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  console.log("isPrivate", isPrivate);

  const deleteHandler = (id) => {
    if (loggedIn) {
      if (window.confirm("Are you sure?")) {
        const targetRef = doc(quotesRef, id);
        deleteDoc(targetRef);

        dispatch({ type: "DELETE_QUOTE", id });
      }
    } else {
      navigate("/Login", { from: location });
    }
  };

  const favHandler = async (quoteItem) => {
    if (loggedIn) {
      if (quoteItem.isLiked.length === 0) {
        const data = {
          id_user: uid,
          id_quote: quoteItem.id,
        };
        addDoc(favoriteQuotesRef, data);
        setDoc(quotesRef, { isLiked: uid }, { merge: true });
      } else {
        const targetQuery = query(
          favoriteQuotesRef,
          where("id_quote", "==", quoteItem.id)
        );
        const querySnapShot = await getDocs(targetQuery);
        const id = querySnapShot.docs.map((item) => item.id).toString();
        const targetRef = doc(favoriteQuotesRef, id);
        await deleteDoc(targetRef);

        setDoc(quotesRef, { isLiked: "" }, { merge: true });
      }
    } else {
      navigate("/Login", { from: location });
    }

    // setIsOpen(true);
    // } else {
    //   navigate("/Login", { from: location });
    // }
  };

  return (
    <div className="container mx-auto">
      <Quote
        favHandler={favHandler}
        deleteHandler={deleteHandler}
        isPrivate={isPrivate}
      />
    </div>
  );
}

QuotesList.propTypes = {
  isPrivate: PropTypes.bool.isRequired,
};

export default QuotesList;
