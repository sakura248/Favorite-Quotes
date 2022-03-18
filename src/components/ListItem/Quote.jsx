/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
// import ReactLoading from "react-loading";

import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "react-modal";
import useAuthStatus from "../../hooks/useAuthStatus";
import UpdateQuoteForm from "../Form/UpdateQuoteForm";

const appElement = document.getElementById("content");
Modal.setAppElement(appElement);

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

function Quote({
  favHandler,
  deleteHandler,
  quoteList,
  tvShowList,
  characterList,
  likedList,
}) {
  const { uid } = useAuthStatus();

  // ADJUSTING FOR RENDERING THE LIST
  quoteList.forEach((item) => {
    const element = item;

    // TV SHOW
    const tvShowData = tvShowList.filter(
      (tvshow) => tvshow.id === item.id_tvshow.toString()
    );
    element.tvShow = tvShowData.map((el) => el.title);

    // CHARACTER
    const characterData = characterList.filter(
      (character) => character.id === item.id_character.toString()
    );
    element.character = characterData.map((el) => el.name);

    // LIKE BUTTON
    const isLikedData = likedList.filter(
      (fav) => fav.id_quote === item.id && fav.id_user === uid
    );

    element.isLiked = isLikedData;
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalQuote, setModalQuote] = useState();

  function openModal(quote) {
    setIsOpen(true);
    setModalQuote(quote);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(quoteList);

  return (
    <div className="p-12">
      {quoteList.length > 0 ? (
        quoteList.map((quoteItem) => (
          <div
            key={quoteItem.id}
            className="flex flex-col items-center sm:flex-row sm:justify-between sm:w-10/12 sm:mt-9 sm:mb-9 sm:w-11/12"
          >
            <blockquote className="mb-8 relative">
              <button type="button" onClick={() => openModal(quoteItem)}>
                <ul className="quote-ul flex flex-col items-center sm:items-start cursor-pointer pt-24 sm:pt-8">
                  <li className="quote quote-text my-3 text-lg text-center sm:text-left sm:text-base font-bold hover:animate-spin relative text-headline">
                    {quoteItem.quoteContent}
                  </li>
                  <li className="quote quote-name my-1">
                    {quoteItem.character}
                  </li>
                  <li className="quote quote-show my-1">
                    &quot;{quoteItem.tvShow}&quot;
                  </li>
                </ul>
              </button>
            </blockquote>
            <div key={quoteItem.id} className="edit-area flex flex-row">
              <button type="button" onClick={() => favHandler(quoteItem)}>
                {quoteItem.isLiked.length > 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-6.769 8.852-8.346 12-2.944 3.125-5.362 12-3.848 12 2.944 0 .746-.156 1.496-.423 2.253-1.116-.902-2.534-1.445-4.077-1.445-3.584 0-6.5 2.916-6.5 6.5 0 2.063.97 3.901 2.473 5.093z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 .746-.156 1.496-.423 2.253-.527-.427-1.124-.768-1.769-1.014.122-.425.192-.839.192-1.239 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.109-2.064c.376.557.839 1.048 1.364 1.465z" />
                  </svg>
                )}
              </button>
              <button type="button" onClick={() => deleteHandler(quoteItem.id)}>
                <svg
                  className="trash m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>There is no quote you posted! Add something!</p>
        </div>
      )}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <UpdateQuoteForm closeModal={closeModal} quoteItem={modalQuote} />
        </Modal>
      )}
    </div>
  );
}

Quote.propTypes = {
  favHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  // isPrivate: PropTypes.bool.isRequired,
};

export default Quote;
