// import React, {useEffect} from 'react'


const Form = ({
    // // for add
    // addQuoteHandler,
    // // for update
    addOrUpdateQuoteHandler,
    quote, 
    onChangeQuote,
    onChangeCharacter,
    character,
    tvShowTitle,
    onChangeTvShowTitle,
    value,
    closeModal,
    onChangeEpisodeTitle
    // firestoreTest // test
    
}) => {


    return (
        <div className="add-quote-wrapper">
            <p className="quotation text-7xl">"</p>
            <form 
                className="quote-form-wrapper" 
                onSubmit={addOrUpdateQuoteHandler}
            >
                <textarea
                    name="quote"
                    id="quote"
                    cols="30"
                    rows="10"
                    defaultValue='Type the quote..'
                    value={quote}
                    onChange={onChangeQuote}
                    className="p-2 border-solid border border-black focus:border-primary-orange"
                    required="required"
                >
                    
                </textarea>
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
                <button
                    type="submit"
                    className="submit-btn"
                >
                    {value}
                </button>
                {/* <button onClick={firestoreTest}>firestore test</button> */}
            </form>
            <button 
                className="close-btn"
                onClick={closeModal}
            >
                close
            </button>
        </div>
    )
}

export default Form
