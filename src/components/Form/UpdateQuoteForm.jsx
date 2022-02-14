import React, { useState } from "react";
// import { quoteReducer } from '../../redux/quote/quote.reducers'
// import ReactDOM from 'react-dom';
// import { connect, useSelector } from 'react-redux'
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
// import { updateQuote } from "../../redux/quote/quote.actions";
import { updateDoc, doc } from "firebase/firestore";
import useAuthStatus from "../../hooks/useAuthStatus";
import { quotesRef } from "../../firebase-config";

import Form from "./Form";

function UpdateQuoteForm({ closeModal, quoteItem }) {
  const [newQuote, setNewQuote] = useState(quoteItem.quote);
  const [newCharacter, setNewCharacter] = useState(quoteItem.character);
  const [newTvShowTitle, setNewTvShowTitle] = useState(quoteItem.tvShowTitle);

  const onChangeQuote = (e) => {
    setNewQuote(e.target.value);
  };
  const onChangeCharacter = (e) => {
    setNewCharacter(e.target.value);
  };
  const onChangeTvShowTitle = (e) => {
    setNewTvShowTitle(e.target.value);
  };

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  const updateQuoteHandler = (e) => {
    e.preventDefault();

    e.preventDefault();
    if (newQuote && newCharacter && newTvShowTitle) {
      const data = {
        id_character: "",
        id_episode: "",
        id_tvshow: "",
        id_user: uid,
        quote: newQuote,
        updatedDate: new Date(),
      };
      const targetRef = doc(quotesRef, quoteItem.id);
      updateDoc(targetRef, data, { merge: true });
      dispatch({ type: "ADD_QUOTE", data });
      closeModal();
    }
    //  else {
    //     alert('please fill in all fields!')
    // }
  };

  return (
    <Form
      addOrUpdateQuoteHandler={updateQuoteHandler}
      onChangeQuote={onChangeQuote}
      onChangeCharacter={onChangeCharacter}
      onChangeTvShowTitle={onChangeTvShowTitle}
      quote={newQuote}
      character={newCharacter}
      tvShowTitle={newTvShowTitle}
      value="UPDATE"
      closeModal={closeModal}
    />
  );
}

UpdateQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  quoteItem: PropTypes.shape.isRequired,
};

export default UpdateQuoteForm;
