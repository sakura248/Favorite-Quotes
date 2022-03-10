import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { updateDoc, doc, serverTimestamp } from "firebase/firestore";
import useAuthStatus from "../../hooks/useAuthStatus";
import { quotesRef } from "../../firebase-config";

import Form from "./Form";

function UpdateQuoteForm({ closeModal, quoteItem }) {
  const [errorMsg] = useState("");
  // const [newQuote, setNewQuote] = useState(quoteItem.quote);
  // const [newCharacter, setNewCharacter] = useState(quoteItem.character);
  // const [newTvShowTitle, setNewTvShowTitle] = useState(quoteItem.tvShowTitle);

  // const onChangeQuote = (e) => {
  //   setNewQuote(e.target.value);
  // };
  // const onChangeCharacter = (e) => {
  //   setNewCharacter(e.target.value);
  // };
  // const onChangeTvShowTitle = (e) => {
  //   setNewTvShowTitle(e.target.value);
  // };

  const [form, setRegistration] = useState({
    quote: quoteItem.quoteContent,
    episodeTitle: "",
    tvShow: { name: quoteItem.tvShow },
    character: { name: quoteItem.character },
  });

  console.log("quoteItem ", quoteItem);
  console.log("form ", form);

  const [suggest] = useState({
    titleSuggestList: [],
    characterSuggestList: [],
  });

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  const updateQuoteHandler = (e) => {
    e.preventDefault();
    const quoteContent = form.quote;

    if (quoteContent && form.character.id && form.tvShow.id) {
      const data = {
        id_character: "",
        id_episode: "",
        id_tvshow: "",
        id_user: uid,
        quoteContent,
        updatedDate: serverTimestamp(),
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
      errorMsg={errorMsg}
      form={form}
      value="ADD"
      onChange={setRegistration}
      onSubmit={updateQuoteHandler}
      titleSuggestList={suggest.titleSuggestList}
      onClose={closeModal}
      // addOrUpdateQuoteHandler={updateQuoteHandler}
      // onChangeQuote={onChangeQuote}
      // onChangeCharacter={onChangeCharacter}
      // onChangeTvShowTitle={onChangeTvShowTitle}
      // quote={newQuote}
      // character={newCharacter}
      // tvShowTitle={newTvShowTitle}
    />
  );
}

UpdateQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  quoteItem: PropTypes.shape,
};

export default UpdateQuoteForm;
