import React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import dayjs from "dayjs";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
// import { collection, addDoc } from "firebase/firestore";
import { addQuote } from "../../redux/quote/quote.actions";
// import { db } from "../../firebase-config";

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

  // const firestoreTest = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "quotes"), {
  //       createdDate: new Date(),
  //       id_character: "weoVhelmDWFXmN9YzauN",
  //       id_episodes: "Article 2",
  //       id_tvshow: "YbEsCp1veKajaO40R6HJ",
  //       id_user: "",
  //       quote:
  //         "One time my refrigerator stopped working. I didn’t know what to do. I just moved.",
  //       updatedDate: new Date(),
  //     });
  //     console.log("Document written with ID: ", docRef);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

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
        value="ADD"
        closeModal={closeModal}

        // firestoreTest={firestoreTest}
      />
  );
};

AddQuoteForm.propTypes = {
  closeModal: PropTypes.string.isRequired,
}

export default AddQuoteForm;
