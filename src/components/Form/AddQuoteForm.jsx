import { addDoc, doc, setDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db, quotesRef } from "../../firestore-refs";
import useAuthStatus from "../../hooks/useAuthStatus";
import Form from "./Form";

function AddQuoteForm({ closeModal }) {
  const [errorMsg] = useState("");

  const [form, setRegistration] = useState({
    quote: "",
    tvShow: {},
    character: {},
  });

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  // Adding to Firebase
  const addQuoteHandler = async (e) => {
    e.preventDefault();
    const quoteContent = form.quote;

    const data = {
      createdDate: new Date(),
      id_user: uid,
      liked: [],
      quoteContent,
      updatedDate: new Date(),
      id_tvshow: form.tvShow.id,
    };

    if (quoteContent && form.character.id && form.tvShow.id) {
      data.id_character = form.character.id;

      // ADD DATA TO FIRESTORE
      addDoc(quotesRef, data);
      setDoc(doc(db, "character", form.character.id.toString()), {
        name: form.character.name,
        id_tvshow: form.tvShow.id,
      });
      setDoc(doc(db, "tvshow", form.tvShow.id.toString()), {
        title: form.tvShow.name,
      });
    }

    dispatch({ type: "ADD_QUOTE", data });
    closeModal();
  };

  return (
    <Form
      errorMsg={errorMsg}
      form={form}
      submitTxt="ADD"
      onChange={setRegistration}
      onSubmit={addQuoteHandler}
      onClose={closeModal}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
