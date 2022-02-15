import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addDoc, setDoc, doc } from "firebase/firestore";
import Form from "./Form";
import { quotesRef, db } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";

function AddQuoteForm({ closeModal }) {
  const [form, setRegistration] = useState({
    quote: "",
    episodeTitle: "",
    tvShow: {},
    character: {},
  });

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  const addQuoteHandler = async (e) => {
    e.preventDefault();
    const quoteContent = form.quote;
    const data = {
      createdDate: new Date(),
      id_episode: "",
      id_user: uid,
      quoteContent,
      updatedDate: new Date(),
      id_tvshow: tvShowTitleId,
    };

    if (quoteContent && characterId && tvShowTitleId) {
      data.id_character = characterId;

      // ADD DATA TO FIRESTORE
      setDoc(doc(db, "character", characterId.toString()), {
        name: form.character,
        id_tvshow: form.tvShowTitleId,
      });
      setDoc(doc(db, "tvshow", tvShowTitleId.toString()), {
        title: form.tvShowTitle,
      });
      addDoc(quotesRef, data);
    }

    // 🚧 Modifying🚧 FOR IF THERE'S NO CHARACTER DATA IN API
    else if (quoteContent && tvShowTitleId) {
      setDoc(doc(db, "tvshow", tvShowTitleId.toString()), {
        title: form.tvShowTitle,
      });
      addDoc(quotesRef, data);
    }

    dispatch({ type: "ADD_QUOTE", data });
    closeModal();
  };

  return (
    <Form
      errorMsg={errorMsg}
      form={form}
      value="ADD"
      onChange={setRegistration}
      onSubmit={addQuoteHandler}
      titleSuggestList={suggest.titleSuggestList}
      onClose={closeModal}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
