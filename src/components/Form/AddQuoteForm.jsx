import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addDoc } from "firebase/firestore";
import Form from "./Form";
import { quotesRef } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";

function AddQuoteForm({ closeModal }) {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [tvShowTitle, setTvShowTitle] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [titleSuggestList, setTitleSuggestList] = useState([]);

  const [showList, setShowList] = useState(false);

  const { uid } = useAuthStatus();

  const onChangeQuote = (e) => {
    setQuote(e.target.value);
  };
  const onChangeCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const onChangeEpisodeTitle = (e) => {
    setEpisodeTitle(e.target.value);
  };

  const dispatch = useDispatch();

  // API SuggestList FUNCTIONS
  const API_KEY = process.env.REACT_APP_movieApi;

  const onChangeTvShowTitle = async (e) => {
    setTvShowTitle(e.target.value);
    setShowList(true);
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${tvShowTitle}`;
    await fetch(url)
      .then((result) => result.json())
      // .then((result) => console.log('log', result.results))
      // .then((data) => data.results.map((item) => console.log(item.name)))
      .then((result) => {
        // const titleSuggestData = result;
        setTitleSuggestList(result.results);
        console.log("titleSuggestList", titleSuggestList);
      })
      .catch((err) => console.error(err));
  };

  const handleSetValue = (e) => {
    console.log(e.target.value);
  };

  const makeList = (list) => {
    const newList = list;
    console.log("newList", newList);
    // if (newList.length > 0) return newList.map((item) => <li>{item}</li>);
    return <li>No Match!</li>;
  };

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
      titleSuggestList={titleSuggestList}
      makeList={makeList}
      value="ADD"
      closeModal={closeModal}
      showList={showList}
      handleSetValue={handleSetValue}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
