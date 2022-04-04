import {
  addDoc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { favoriteQuotesRef, quotesRef } from "../firestore-refs";
import UseCharacterList from "../hooks/firestore/UseCharacterList";
import UseLikedList from "../hooks/firestore/UseLikedList";
import UseQuoteList from "../hooks/firestore/UseQuoteList";
import UseTvShow from "../hooks/firestore/UseTvShow";
import UseAuthStatus from "../hooks/UseAuthStatus";
import Quote from "./ListItem/Quote";

function QuotesList({ type, order }) {
  const { loggedIn, uid } = UseAuthStatus();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fetchQuoteList, quoteList } = UseQuoteList();
  const { fetchTvShow, tvShowList } = UseTvShow();
  const { fetchLiked, likedList } = UseLikedList();
  const { fetchCharacter, characterList } = UseCharacterList();

  useEffect(() => {
    fetchQuoteList(type, uid);
    fetchLiked(uid);
    fetchTvShow();
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, uid]);

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
      // LIKE
      if (quoteItem.isLiked.length === 0) {
        const data = {
          id_user: uid,
          id_quote: quoteItem.id,
        };
        await addDoc(favoriteQuotesRef, data);
        const targetRef = doc(quotesRef, quoteItem.id);
        await updateDoc(targetRef, { liked: arrayUnion(uid) });
      } else {
        // DELETE LIKE
        const targetQuery = query(
          favoriteQuotesRef,
          where("id_quote", "==", quoteItem.id),
          where("id_user", "==", uid)
        );
        console.log(targetQuery);
        const querySnapShot = await getDocs(targetQuery);
        const id = querySnapShot.docs
          .map((item) => {
            // item.id;
            console.log("id", item.id);
            return item.id;
          })
          .toString();
        const targetFavRef = doc(favoriteQuotesRef, id);
        await deleteDoc(targetFavRef);
        const targetRef = doc(quotesRef, quoteItem.id);
        await updateDoc(targetRef, { liked: arrayRemove(uid) });
      }
    } else {
      navigate("/Login", { from: location });
    }
  };

  return (
    <div className="container mx-auto">
      <Quote
        loggedIn={loggedIn}
        favHandler={favHandler}
        deleteHandler={deleteHandler}
        quoteList={quoteList}
        likedList={likedList}
        tvShowList={tvShowList}
        characterList={characterList}
        order={order}
      />
    </div>
  );
}

QuotesList.propTypes = {
  type: PropTypes.string,
  order: PropTypes.string,
};

export default QuotesList;
