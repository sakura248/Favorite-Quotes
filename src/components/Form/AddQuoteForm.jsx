import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addDoc, setDoc, doc } from "firebase/firestore";
import Form from "./Form";
import { quotesRef, db } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";

function AddQuoteForm({ closeModal }) {
  const [errorMsg, setErrorMsg] = useState("");
  // const [quote, setQuote] = useState("");

  // FOR TITLE
  const [form, setRegistration] = useState({
    quote: "",
    tvShowTitle: "",
    character: "",
    episodeTitle: "",
  });

  const [suggest, setSuggestList] = useState({
    titleSuggestList: [],
    characterSuggestList: [],
  });

  const [tvShowTitleId, setTvShowTitleId] = useState("");
  // const [titleSuggestList, setTitleSuggestList] = useState([]);
  const [showTitleList, setShowTitleList] = useState(false);

  // FOR CHATACTER
  const [characterId, setCharacterId] = useState("");
  // const [characterSuggestList, setCharacterSuggestList] = useState([]);
  const [showCharacterList, setShowCharacterList] = useState(false);

  const { uid } = useAuthStatus();

  const dispatch = useDispatch();

  const onChangeQuote = (e) => {
    setRegistration({ ...form, quote: e.target.value });
  };
  const onChangeEpisodeTitle = (e) => {
    setRegistration({ ...form, episodeTitle: e.target.value });
  };

  // API SuggestList FUNCTIONS
  const API_KEY = process.env.REACT_APP_movieApi;

  // TITLE
  const onChangeTvShowTitle = async (e) => {
    setRegistration({ ...form, tvShowTitle: e.target.value });
    setShowTitleList(true);
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${form.tvShowTitle}&include_adult=false`;
    await fetch(url)
      .then((result) => result.json())
      .then((result) =>
        setSuggestList({ ...suggest, titleSuggestList: result.results })
      )
      .catch((err) => {
        console.error(err);
        setErrorMsg("API response error", err);
      });
  };

  const handleTitleSetValue = (e) => {
    if (e.name && e.id) {
      setRegistration({ ...form, tvShowTitle: e.name });
      setTvShowTitleId(e.id);
    }
    // CLOSE LIST
    setShowTitleList(false);
  };

  // CHARACTER
  const onChangeCharacter = async (e) => {
    setRegistration({ ...form, character: e.target.value });
    setShowCharacterList(true);
    const url = `https://api.themoviedb.org/3/tv/${tvShowTitleId}/credits?api_key=${API_KEY}&language=en-US`;
    await fetch(url)
      .then((result) => result.json())
      .then((result) => {
        const newList = result.cast.filter(
          (item) =>
            item.character
              .toLowerCase()
              .indexOf(form.character.toLowerCase()) >= 0
        );

        if (newList.length) {
          // setCharacterSuggestList(newList);
          setSuggestList({ ...suggest, characterSuggestList: newList });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("API response error", err);
      });
  };

  const handleCharacterSetValue = (e) => {
    if (e.character && e.id) {
      setRegistration({ ...form, character: e.character });
      setCharacterId(e.id);
    }
    setShowCharacterList(false);
  };

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
      quote={form.quote}
      character={form.character}
      tvShowTitle={form.tvShowTitle}
      episodeTitle={form.episodeTitle}
      titleSuggestList={suggest.titleSuggestList}
      value="ADD"
      closeModal={closeModal}
      showTitleList={showTitleList}
      showCharacterList={showCharacterList}
      characterSuggestList={suggest.characterSuggestList}
      handleTitleSetValue={handleTitleSetValue}
      handleCharacterSetValue={handleCharacterSetValue}
    />
  );
}

AddQuoteForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddQuoteForm;
