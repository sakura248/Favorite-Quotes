/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

// API SuggestList FUNCTIONS
const API_KEY = process.env.REACT_APP_movieApi;

function Form({ errorMsg, form, value, onSubmit, onClose }) {
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeQuote = (e) => {
    onChange({ ...form, quote: e.target.value });
  };

  const onChangeEpisodeTitle = (e) => {
    onChange({ ...form, episodeTitle: e.target.value });
  };

  const onChangeQuote = (e) => {
    onChange({ ...form, quote: e.target.value });
  };

  const onChangeTvShowTitle = async (e) => {
    onChange({ ...form, tvShow: { ...form.tvShow, name: e.target.value } });
  };

  const onChangeCharacter = async (e) => {
    onChange({
      ...form,
      character: { ...form.character, name: e.target.value },
    });
  };

  const onSelectTitle = (e) => {
    if (e.name && e.id) {
      onChange({ ...form, tvShow: e });
    }
  };

  // CHARACTER
  const onSelectCharacter = (e) => {
    if (e.character && e.id) {
      onChange({ ...form, character: e });
    }
  };

  const { quote, episodeTitle, character, tvShow } = form;

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
          className="p-2 border-solid border border-black focus:border-primary-orange"
          required="required"
        />
        <InputSuggest
          required
          value={tvShow.name}
          onChange={onChangeTvShowTitle}
          onFetchlist={async () => {
            const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${form.tvShowTitle}&include_adult=false`;
            const result = await fetch(url);
            try {
              const json = await result.json();
              return json.results;
            } catch (err) {
              console.error(err);
              setErrorMsg("API response error", err);
              return [];
            }
          }}
          onSelect={onSelectTitle}
          onSelectOther={() => {}}
          placeholder="Which TV show?"
        />
        {errorMsg.length > 0 && <p>{errorMsg}</p>}
        <InputSuggest
          required
          value={character.name}
          onChange={onChangeCharacter}
          onFetchlist={async () => {
            const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${form.tvShowTitle}&include_adult=false`;
            const result = await fetch(url);
            try {
              const json = await result.json();
              return json.results;
            } catch (err) {
              console.error(err);
              setErrorMsg("API response error", err);
              return [];
            }
          }}
          onSelect={onSelectCharacter}
          onSelectOther={() => {}}
          placeholder="Which character?"
        />
        {errorMsg.length > 0 && <p>{errorMsg}</p>}
        <Input
          value={episodeTitle}
          onChange={onChangeEpisodeTitle}
          placeholder="Which episode?"
        />
        <button
          type="submit"
          className="submit-btn border-none text-white bg-primary-orange text-lg w-2/5 my-4 py-4"
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
  errorMsg: PropTypes.string.isRequired,
  addOrUpdateQuoteHandler: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  onChangeQuote: PropTypes.func.isRequired,
  onChangeCharacter: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
  tvShowTitle: PropTypes.string.isRequired,
  episodeTitle: PropTypes.string.isRequired,
  onChangeTvShowTitle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onChangeEpisodeTitle: PropTypes.func.isRequired,
  showTitleList: PropTypes.bool.isRequired,
  showCharacterList: PropTypes.bool.isRequired,
  titleSuggestList: PropTypes.shape,
  handleTitleSetValue: PropTypes.func.isRequired,
  handleCharacterSetValue: PropTypes.func.isRequired,
  characterSuggestList: PropTypes.shape,
};

export default Form;
