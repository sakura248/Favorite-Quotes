import React from 'react'
import PropTypes from 'prop-types';

function Form({
  addOrUpdateQuoteHandler,
  quote,
  onChangeQuote,
  onChangeCharacter,
  character,
  tvShowTitle,
  episodeTitle,
  onChangeTvShowTitle,
  value,
  AddRrfTest,
  closeModal,
  onChangeEpisodeTitle,
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
          defaultValue="Type the quote.."
          value={quote}
          onChange={onChangeQuote}
          className="p-2 border-solid border border-black focus:border-primary-orange"
          required="required"
        />
        <input
          type="text"
          onChange={onChangeCharacter}
          value={character}
          placeholder="Who said?"
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
        <input
          type="text"
          value={episodeTitle}
          onChange={onChangeEpisodeTitle}
          placeholder="Which episode?"
          className="p-2 border-solid border border-black focus:border-primary-orange"
        />
        <button type="submit" className="submit-btn">
          {value}
        </button>
        <button type="submit" onClick={AddRrfTest}>firestore test</button>
      </form>
      <button type="button" className="close-btn" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

Form.propTypes = {
  addOrUpdateQuoteHandler: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  onChangeQuote: PropTypes.func.isRequired,
  onChangeCharacter: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
  tvShowTitle: PropTypes.string.isRequired,
  episodeTitle: PropTypes.string.isRequired,
  onChangeTvShowTitle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  AddRrfTest: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  onChangeEpisodeTitle: PropTypes.string.isRequired,
}


export default Form;
