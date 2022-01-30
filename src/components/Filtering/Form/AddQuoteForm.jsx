import { useState } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

import { useDispatch } from "react-redux";
import { addQuote } from "../../redux/quote/quote.actions";

import Form from "./Form";

const AddQuoteForm = ({ closeModal }) => {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [tvShowTitle, setTvShowTitle] = useState("");

  const onChangeQuote = (e) => {
    setQuote(e.target.value);
  };
  const onChangeCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const onChangeTvShowTitle = (e) => {
    setTvShowTitle(e.target.value);
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
        })
      );
      closeModal();
    } else {
      alert("please fill in all fields!");
    }
  };

  return (
    <>
      <Form
        addOrUpdateQuoteHandler={addQuoteHandler}
        onChangeQuote={onChangeQuote}
        onChangeCharacter={onChangeCharacter}
        onChangeTvShowTitle={onChangeTvShowTitle}
        quote={quote}
        character={character}
        tvShowTitle={tvShowTitle}
        value={"ADD"}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddQuoteForm;
