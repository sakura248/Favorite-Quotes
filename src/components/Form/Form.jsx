/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
// eslint-disable-next-line import/namespace
import InputSuggest from "./InputSuggest";

const API_KEY = process.env.REACT_APP_movieApi;
function Form({
  // errorMsg,
  onChange,
  form,
  value,
  onSubmit,
  onClose,
}) {
  const onChangeQuote = (e) => {
    onChange({ ...form, quote: e.target.value });
  };

  const onChangeEpisodeTitle = (e) => {
    onChange({ ...form, episodeTitle: e.target.value });
  };

  const onChangeTvShowTitle = async (e) => {
    onChange({
      ...form,
      tvShow: { ...form.tvShow, name: e.target.value },
    });
  };

  const onSelectTvShowId = async (el) => {
    onChange({
      ...form,
      tvShow: { ...form.tvShow, id: el },
    });
  };

  const onChangeCharacter = async (e) => {
    onChange({
      ...form,
      character: { ...form.character, name: e.target.value },
    });
  };

  const onSelectTitle = (e) => {
    console.log("e", e);
    onChange({
      ...form,
      tvShow: { ...form.tvShow, name: e.name },
    });
  };

  const onSelectCharacter = (e) => {
    if (e.character && e.id) {
      onChange({ ...form, character: e });
    }
  };

  const { quote, episodeTitle, tvShow, character } = form || {};
  console.log("form", form);

  return (
    <div className="add-quote-wrapper">
      <p className="quotation text-7xl">&quot;</p>
      <form className="quote-form-wrapper" onSubmit={onSubmit}>
        <textarea
          name="quote"
          id="quote"
          cols="30"
          rows="10"
          // defaultValue="Type the quote.."
          value={quote}
          onChange={onChangeQuote}
          className="p-2 border-solid border border-black focus:border-primary"
          required="required"
        />

        <InputSuggest
          type="text"
          required
          value={tvShow.name}
          onChange={onChangeTvShowTitle}
          onChangeId={onSelectTvShowId}
          onSelect={onSelectTitle}
          onFetchList={async () => {
            const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${tvShow.name}&include_adult=false`;
            const result = await fetch(url);
            try {
              const json = await result.json();
              return json.results;
            } catch (err) {
              console.error(err);
              // setErrorMsg("API response error", err);
              return [];
            }
          }}
          isCharacter={false}
          // onSelectOther={() => {}}
          placeholder="Which TV show?"
        />
        {/* {errorMsg.length > 0 && <p>{errorMsg}</p>} */}
        <InputSuggest
          required
          value={character.name}
          onChange={onChangeCharacter}
          onFetchList={async () => {
            const url = `https://api.themoviedb.org/3/tv/${tvShow.id}/credits?api_key=${API_KEY}&language=en-US`;
            const result = await fetch(url);
            try {
              const json = await result.json();
              return json.results;
            } catch (err) {
              console.error(err);
              // setErrorMsg("API response error", err);
              return [];
            }
          }}
          isCharacter
          onSelect={onSelectCharacter}
          onSelectOther={() => {}}
          placeholder="Which character?"
        />

        <Input
          value={episodeTitle}
          onChange={onChangeEpisodeTitle}
          placeholder="Which episode?"
        />
        <button
          type="submit"
          className="submit-btn border-none text-white bg-primary text-lg w-2/5 my-4 py-4"
        >
          {value}
        </button>
      </form>
      <button type="button" className="close-btn" onClick={onClose}>
        close
      </button>
    </div>
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  form: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.string,
  // value: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default Form;
