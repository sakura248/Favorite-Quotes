/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const API_KEY = process.env.REACT_APP_movieApi;
function Form({ errorMsg, form, value, onChange, onSubmit, onClose }) {
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeQuote = (e) => {
    onChange({ ...form, quote: e.target.value });
  };
  const onChangeEpisodeTitle = (e) => {
    onChange({ ...form, episodeTitle: e.target.value });
  };
  const onChangeTvShowTitle = (e) => {
    onChange({ ...form, tvShow: { ...form.tvShow, name: e.target.value } });
  };
  const onChangeCharacter = (e) => {
    onChange({
      ...form,
      character: { ...form.character, name: e.target.value },
    });
  };
  const onSelectTitle = (e) => {
    if (e.name & e.id) {
      onChange({ ...form, tvshow: e });
    }
  };
  const onSelectCharacter = (e) => {
    if (e.name & e.id) {
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

        <input
          type="text"
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
        <input
          type="text"
          onChange={onChangeCharacter}
          value={character}
          placeholder="Who said?"
          className="p-2 border-solid border border-black focus:border-primary-orange"
          required="required"
        />

        {characterSuggestList && showCharacterList && (
          <ul className="suggest-wrapper border-solid border border-gray-500 overflow-auto h-80">
            {characterSuggestList.map((item) => (
              <li key={item.id} className="title-suggest-list">
                <button
                  type="submit"
                  onClick={() => handleCharacterSetValue(item)}
                  className="hover:bg-red-100 flex justify-start items-center w-full"
                >
                  {item.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                      alt="item"
                      className="mx-5 w-14"
                    />
                  )}
                  {item.character}
                </button>
              </li>
            ))}
            <li>
              <button
                type="submit"
                onClick={() => handleCharacterSetValue("other")}
                className="hover:bg-red-100 flex justify-start items-center w-full"
              >
                <p>other than above</p>
              </button>
            </li>
          </ul>
        )}

        <input
          type="text"
          value={episodeTitle}
          onChange={onChangeEpisodeTitle}
          placeholder="Which episode?"
          // className="p-2 border-solid border border-black focus:border-primary-orange"
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
