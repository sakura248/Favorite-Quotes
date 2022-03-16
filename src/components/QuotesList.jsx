/* eslint-disable no-unused-vars */
import "firebase/firestore";
import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react"; // useState
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  favoriteQuotesRef,
  quotesRef,
  tvCharacterRef,
  tvShowRef,
} from "../firebase-config";
import useAuthStatus from "../hooks/useAuthStatus";
import Quote from "./ListItem/Quote";

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

  const [quoteLists, setQuoteLists] = useState([]);
  const [likedLists, setLikedLists] = useState([]);
  const [tvShowList, setTvShowList] = useState([]);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    async function fetch() {
      if (isPrivate) {
        const q = await query(quotesRef, where("id_user", "==", uid));
        onSnapshot(q, (document) => {
          console.log(document.docs);
          setQuoteLists(
            document.docs.map((item) => ({ ...item.data(), id: item.id }))
          );
        });
      } else {
        await onSnapshot(quotesRef, (document) => {
          setQuoteLists(
            document.docs.map((item) => ({ ...item.data(), id: item.id }))
          );
        });
      }

      await onSnapshot(favoriteQuotesRef, (document) => {
        setLikedLists(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });

      await onSnapshot(tvShowRef, (document) => {
        setTvShowList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });

      await onSnapshot(tvCharacterRef, (document) => {
        setCharacterList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
    }
    fetch();
  }, [isPrivate, uid]);

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
  };

  return (
    <div className="container mx-auto">
      <Quote
        favHandler={favHandler}
        deleteHandler={deleteHandler}
        isPrivate={isPrivate}
        quoteLists={quoteLists}
        likedLists={likedLists}
        tvShowList={tvShowList}
        characterList={characterList}
      />
    </div>
  );
}

QuotesList.propTypes = {
  isPrivate: PropTypes.bool.isRequired,
};

export default QuotesList;
