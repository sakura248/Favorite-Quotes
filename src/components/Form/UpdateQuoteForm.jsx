import React, { useState } from "react";
// import { quoteReducer } from '../../redux/quote/quote.reducers'
// import ReactDOM from 'react-dom';
// import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import { useDispatch } from "react-redux";
import { updateQuote } from "../../redux/quote/quote.actions";

import Form from "./Form";

function UpdateQuoteForm({ closeModal, quoteItem }) {
  // const quoteLists = useSelector(state => state.quoteLists)
  const {id} = quoteItem;
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

  const dispatch = useDispatch();

  const updateQuoteHandler = (e) => {
    e.preventDefault();
    if (newQuote && newCharacter && newTvShowTitle) {
      dispatch(
        updateQuote({
          id,
          newQuote,
          newCharacter,
          newTvShowTitle,
        })
      );
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
  quoteItem: PropTypes.func.isRequired
}

export default UpdateQuoteForm;
