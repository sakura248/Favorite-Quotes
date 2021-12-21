// import React from 'react'


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
    closeModal
    
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
                >
                    
                </textarea>
                <input 
                    type="text"
                    onChange={onChangeCharacter}
                    value={character}
                    placeholder="Who said?"
                    className="p-2 border-solid border border-black focus:border-primary-orange"
                />
                <input 
                    type="text"
                    value={tvShowTitle}
                    onChange={onChangeTvShowTitle}
                    placeholder="Which TV show?"
                    className="p-2 border-solid border border-black focus:border-primary-orange"
                />
                <button
                    type="submit"
                    className="submit-btn"
                >
                    {value}
                </button>
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
