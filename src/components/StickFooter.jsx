import React, { useState } from "react";
import Modal from "react-modal";
import "./Form/form.css";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

import AddQuoteForm from "./Form/AddQuoteForm";

const appElement = document.getElementById("root");
Modal.setAppElement(appElement);

// for modal setting
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    backgroundColor: "#f2f2f2",
  },
};

function StickFooter() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { loggedIn } = useAuthStatus();
  const location = useLocation();
  const navigate = useNavigate();

  // const redirectLogin = () => {
  //     return <Navigate to='/Login' state={{ from: location }} />
  // }

  function openModalHandle() {
    if (loggedIn) {
      setIsOpen(true);
    } else {
      navigate("/Login", { from: location });
    }
  }
  // function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     // subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  // : <Navigate to='/Login' state={{ from: location }} />

  return (
    <>
      <button
        id="add-button"
        className="fixed bg-primary-orange hover:primary-orange-hover w-20 h-20 right-8 bottom-8 rounded-full"
        onClick={openModalHandle}
        type="button"
      >
        <span className="plus-icon-border relative inline-block align-middle leading-none w-12 h-1 z-50 bg-current" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <AddQuoteForm closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default StickFooter;
