import React from "react";
import { useState } from "react";
// import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import { addQuote } from "../../redux/quote/quote.actions";
// import SaveProduct from "../../app/operations";

import { addDoc } from "firebase/firestore";
import Form from "./Form";
import { quotesRef } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";

function AddQuoteForm({ closeModal }) {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [tvShowTitle, setTvShowTitle] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");

  const { uid } = useAuthStatus();

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

  const addQuoteHandler = async (e) => {
    e.preventDefault();
    if (quote && character && tvShowTitle) {
      const data = {
        createdDate: new Date(),
        id_character: "",
        id_episode: "",
        id_tvshow: "",
        id_user: uid,
        quote,
        updatedDate: new Date(),
      };
      addDoc(quotesRef, data);
      console.log(data);
      dispatch({ type: "ADD_QUOTE", data });
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
      // saveProduct={saveProduct}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
