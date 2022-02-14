/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

function Form({
  errorMsg,
  addOrUpdateQuoteHandler,
  quote,
  onChangeQuote,
  onChangeCharacter,
  character,
  tvShowTitle,
  episodeTitle,
  onChangeTvShowTitle,
  value,
  closeModal,
  onChangeEpisodeTitle,
  showTitleList,
  showCharacterList,
  titleSuggestList,
  handleTitleSetValue,
  characterSuggestList,
  handleCharacterSetValue,
}) {
  return (
    <div className="add-quote-wrapper">
      <p className="quotation text-7xl">&quot;</p>
      <form className="quote-form-wrapper" onSubmit={addOrUpdateQuoteHandler}>
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
          value={tvShowTitle}
          onChange={onChangeTvShowTitle}
          placeholder="Which TV show?"
          className="p-2 border-solid border border-black focus:border-primary-orange"
          required="required"
        />
        {titleSuggestList && showTitleList && (
          <ul className="suggest-wrapper border-solid border border-gray-500 overflow-auto h-80">
            {titleSuggestList.map((item) => (
              <li key={item.id} className="title-suggest-list">
                <button
                  type="submit"
                  onClick={() => handleTitleSetValue(item)}
                  className="hover:bg-red-100 flex justify-start items-center w-full"
                >
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                      alt="item"
                      className="mx-5 w-14"
                    />
                  )}
                  {item.name}
                  {item.origin_country.length > 0 &&
                    ` (${item.origin_country})`}
                  <span className="text-sm text-gray-500">
                    {item.first_air_date && item.first_air_date}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {errorMsg.length > 0 && <p>{errorMsg}</p>}
        <input
          type="text"
          onChange={onChangeCharacter}
          value={character}
          placeholder="Who said?"
          className="p-2 border-solid border border-black focus:border-primary-orange"
          required="required"
        />

        {/* CHRACTER */}
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
          className="p-2 border-solid border border-black focus:border-primary-orange"
        />
        <button
          type="submit"
          className="submit-btn border-none text-white bg-primary-orange text-lg w-2/5 my-4 py-4"
        >
          {value}
        </button>
      </form>
      <button type="button" className="close-btn" onClick={closeModal}>
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
