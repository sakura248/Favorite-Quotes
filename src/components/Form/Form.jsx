import React from 'react'
import PropTypes from 'prop-types';

function Form({
  addOrUpdateQuoteHandler,
  quote,
  onChangeQuote,
  onChangeCharacter,
  character,
  tvShowTitle,
  onChangeTvShowTitle,
  value,
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
          value={tvShowTitle}
          onChange={onChangeEpisodeTitle}
          placeholder="Which episode?"
          className="p-2 border-solid border border-black focus:border-primary-orange"
        />
        <button type="submit" className="submit-btn">
          {value}
        </button>
        {/* <button onClick={firestoreTest}>firestore test</button> */}
      </form>
      <button type="button" className="close-btn" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

Form.propTypes = {
  addOrUpdateQuoteHandler: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  onChangeQuote: PropTypes.string.isRequired,
  onChangeCharacter: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  tvShowTitle: PropTypes.string.isRequired,
  onChangeTvShowTitle: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  closeModal: PropTypes.string.isRequired,
  onChangeEpisodeTitle: PropTypes.string.isRequired,
}


export default Form;
