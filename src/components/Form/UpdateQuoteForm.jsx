import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db, quotesRef } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";
import Form from "./Form";

function UpdateQuoteForm({ closeModal, quoteItem }) {
  const [errorMsg] = useState("");

  const [form, setRegistration] = useState({
    quote: quoteItem.quoteContent,
    tvShow: { name: quoteItem.tvShow, id: quoteItem.id_tvshow },
    character: {
      name: quoteItem.character,
      id: quoteItem.id_character,
    },
  });

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  // Updating firebase
  const updateQuoteHandler = async (e) => {
    e.preventDefault();

    if (form.quote) {
      const data = {
        id_character: form.character.id,
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
  };

  return (
    <Form
      errorMsg={errorMsg}
      form={form}
      submitTxt="UPDATE"
      onChange={setRegistration}
      onSubmit={updateQuoteHandler}
      onClose={closeModal}
    />
  );
}

UpdateQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  quoteItem: PropTypes.shape.isRequired,
};

export default UpdateQuoteForm;
