import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addDoc } from "firebase/firestore";
import Form from "./Form";
import { quotesRef } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";

function AddQuoteForm({ closeModal }) {
  const [errorMsg, setErrorMsg] = useState("");

  const [quote, setQuote] = useState("");

  // FOR TITLE
  const [tvShowTitle, setTvShowTitle] = useState("");
  const [tvShowTitleId, setTvShowTitleId] = useState("");
  const [titleSuggestList, setTitleSuggestList] = useState([]);
  const [showTitleList, setShowTitleList] = useState(false);

  // FOR CHATACTER
  const [character, setCharacter] = useState("");
  const [characterId, setCharacterId] = useState("");
  const [characterSuggestList, setCharacterSuggestList] = useState([]);
  const [showCharacterList, setShowCharacterList] = useState(false);

  const [episodeTitle, setEpisodeTitle] = useState("");

  const { uid } = useAuthStatus();

  const onChangeQuote = (e) => {
    setQuote(e.target.value);
  };
  const onChangeEpisodeTitle = (e) => {
    setEpisodeTitle(e.target.value);
  };

  const dispatch = useDispatch();

  // API SuggestList FUNCTIONS
  const API_KEY = process.env.REACT_APP_movieApi;

  // TITLE
  const onChangeTvShowTitle = async (e) => {
    setTvShowTitle(e.target.value);
    setShowTitleList(true);
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${tvShowTitle}&include_adult=false`;
    await fetch(url)
      .then((result) => result.json())
      .then((result) => setTitleSuggestList(result.results))
      .catch((err) => {
        console.error(err);
        setErrorMsg("API response error", err);
      });
  };

  const handleTitleSetValue = (e) => {
    setTvShowTitle(e.name);
    setTvShowTitleId(e.id);

    // CLOSE LIST
    setShowTitleList(false);
  };

  // CHARACTER
  const onChangeCharacter = async (e) => {
    setCharacter(e.target.value);
    console.log(character);
    setShowCharacterList(true);
    const url = `https://api.themoviedb.org/3/tv/${tvShowTitleId}/credits?api_key=${API_KEY}&language=en-US`;
    await fetch(url)
      .then((result) => result.json())
      .then((result) => {
        const newList = result.filter(
          (item) => item.toLowerCase().indexOf(character.toLowerCase()) >= 0
        );

        if (newList.length) {
          console.log(newList, character);
          setCharacterSuggestList(newList);
          console.log("new list", characterSuggestList);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("API response error", err);
      });
  };

  // makeList(["jake", "andy", "terry"], character);

  const handleCharacterSetValue = (e) => {
    setCharacter(e.character);
    setCharacterId(e.id);

    setShowTitleList(false);
  };

  const addQuoteHandler = async (e) => {
    e.preventDefault();
    if (quote && characterId && tvShowTitleId) {
      const data = {
        createdDate: new Date(),
        id_character: "",
        id_episode: "",
        id_tvshow: tvShowTitleId,
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
      errorMsg={errorMsg}
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
      value="ADD"
      closeModal={closeModal}
      showTitleList={showTitleList}
      showCharacterList={showCharacterList}
      characterSuggestList={characterSuggestList}
      handleTitleSetValue={handleTitleSetValue}
      handleCharacterSetValue={handleCharacterSetValue}
      // makeList={makeList}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
