import React from 'react';
import { useState } from "react";
// import dayjs from "dayjs";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { addQuote } from "../../redux/quote/quote.actions";

import AddRrfTest from "../../app/operations"

import Form from "./Form";

function AddQuoteForm({ closeModal }) {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [tvShowTitle, setTvShowTitle] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");

  const onChangeQuote = (e) => {
    setQuote(e.target.value);
  };
  const onChangeCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const onChangeTvShowTitle = (e) => {
    setTvShowTitle(e.target.value);
  };
  const onChangeEpisodeTitle = (e) => {
    setEpisodeTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const addQuoteHandler = (e) => {
    e.preventDefault();
    if (quote && character && tvShowTitle) {
      dispatch(
        addQuote({
          quote,
          character,
          tvShowTitle,
          episodeTitle,
        })
      );
      closeModal();
    }
    // else {
    //     alert('please fill in all fields!')
    // }
  };

  return (
      <Form
        addOrUpdateQuoteHandler={addQuoteHandler}
        onChangeQuote={onChangeQuote}
        onChangeCharacter={onChangeCharacter}
        onChangeTvShowTitle={onChangeTvShowTitle}
        onChangeEpisodeTitle={onChangeEpisodeTitle}
        quote={quote}
        character={character}
        tvShowTitle={tvShowTitle}
        episodeTitle={episodeTitle}
        value="ADD"
        closeModal={closeModal}

        AddRrfTest={AddRrfTest}
        // saveQuote={saveQuote}
      />
  );
};

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default AddQuoteForm;
