import PropTypes from "prop-types";
import React from "react";
import InputSuggest from "./InputSuggest";

const API_KEY = process.env.REACT_APP_movieApi;
function Form({
  // errorMsg,
  onChange,
  form,
  submitTxt,
  onSubmit,
  onClose,
}) {
  const onChangeQuote = (e) => {
    onChange({
      ...form,
      quote: e.target.value,
    });
  };

  const onChangeTvShowTitle = async (e) => {
    onChange({
      ...form,
      tvShow: { ...form.tvShow, name: e.target.value },
    });
  };

  const onChangeCharacter = async (e) => {
    onChange({
      ...form,
      character: { ...form.character, name: e.target.value },
    });
  };

  const onSelectTitle = async (e) => {
    if (e.name && e.id) {
      onChange({
        ...form,
        tvShow: { ...form.tvShow, name: e.name, id: e.id },
      });
    }
  };

  const onSelectCharacter = (e) => {
    if (e.character && e.id) {
      onChange({
        ...form,
        character: { ...form.character, name: e.character, id: e.id },
      });
    }
  };

  const { quote, tvShow, character } = form;

  return (
    <div className="add-quote-wrapper">
      <p className="quotation text-7xl">&quot;</p>
      <form
        className="quote-form-wrapper mx-auto w-4/5 flex flex-col items-center"
        onSubmit={onSubmit}
      >
        <label
          className="font-bold mb-2 mt-4 flex flex-col w-full"
          htmlFor="quote"
        >
          Quote
          <textarea
            name="quote"
            id="quote"
            cols="30"
            rows="10"
            // defaultValue="Type the quote.."
            value={quote}
            onChange={onChangeQuote}
            className="mt-2.5 p-2 border-solid border border-black focus:border-primary"
            required="required"
          />
        </label>

        <InputSuggest
          type="text"
          required
          value={tvShow.name}
          onChange={onChangeTvShowTitle}
          labelName="TV Show Title"
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
          onSelect={onSelectTitle}
          // onSelectOther={() => {}}
          placeholder="Which TV show?"
        />
        {/* {errorMsg.length > 0 && <p>{errorMsg}</p>} */}
        <InputSuggest
          required
          value={character.name}
          onChange={onChangeCharacter}
          labelName="Character Name"
          onFetchList={async () => {
            // tvShow.id = 8592;
            const url = `https://api.themoviedb.org/3/tv/${tvShow.id}/credits?api_key=${API_KEY}&language=en-US`;
            const result = await fetch(url);
            try {
              const json = await result.json();
              const newList = json.cast.filter(
                (item) =>
                  item.character
                    .toLowerCase()
                    .indexOf(form.character.name.toLowerCase()) >= 0
              );
              console.log(newList);
              return newList;
              // return json.results;
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
        <button
          type="submit"
          className="submit-btn border-none text-white bg-primary text-lg w-2/5 my-4 py-4"
        >
          {submitTxt}
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
  submitTxt: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default Form;
