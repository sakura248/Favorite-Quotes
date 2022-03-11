import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { updateDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import useAuthStatus from "../../hooks/useAuthStatus";
import { quotesRef, db } from "../../firebase-config";

import Form from "./Form";

function UpdateQuoteForm({ closeModal, quoteItem }) {
  const [errorMsg] = useState("");

  const [form, setRegistration] = useState({
    quote: quoteItem.quoteContent,
    episodeTitle: "",
    tvShow: { name: quoteItem.tvShow, id: quoteItem.id_tvshow },
    character: {
      name: quoteItem.character,
      id: quoteItem.id_character,
    },
  });

  console.log("quoteItem ", quoteItem);
  console.log("form ", form);

  const [suggest] = useState({
    titleSuggestList: [],
    characterSuggestList: [],
  });

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  // Updating firebase
  const updateQuoteHandler = async (e) => {
    e.preventDefault();
    // const quoteContent = form.quote;

    if (
      form.quote
      // && form.character.id
      // && form.tvShow.id
    ) {
      const data = {
        id_character: form.character.id,
        id_episode: "",
        id_tvshow: form.tvShow.id,
        id_user: uid,
        quoteContent: form.quote,
        updatedDate: serverTimestamp(),
      };

      const targetRef = doc(quotesRef, quoteItem.id);

      updateDoc(targetRef, data, { merge: true });
      setDoc(doc(db, "character", form.character.id.toString()), {
        name: form.character.name,
        id_tvshow: form.tvShow.id,
      });
      setDoc(doc(db, "tvshow", form.tvShow.id.toString()), {
        title: form.tvShow.name,
      });
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
      value="UPDATE"
      onChange={setRegistration}
      onSubmit={updateQuoteHandler}
      titleSuggestList={suggest.titleSuggestList}
      onClose={closeModal}
    />
  );
}

UpdateQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  quoteItem: PropTypes.shape,
};

export default UpdateQuoteForm;
