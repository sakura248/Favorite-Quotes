import React from 'react'


const Form = ({
    newQuote, 
    onChangeQuote,
    onChangeCharacter,
    newCharacter,
    newTvShowTitle,
    onChangeTvShowTitle,
    updateQuoteHandler,
    value




}) => {
    return (
        <div>
            <textarea
                name="quote"
                id="quote"
                cols="30"
                rows="10"
                defaultValue='Type the quote..'
                value={newQuote}
                onChange={onChangeQuote}
                className="p-2 border-solid border border-black focus:border-primary-orange"    
            >
                
            </textarea>
            <input 
                type="text"
                onChange={onChangeCharacter}
                value={newCharacter}
                placeholder="Who said?"
                className="p-2 border-solid border border-black focus:border-primary-orange"
            />
            <input 
                type="text"
                value={newTvShowTitle}
                onChange={onChangeTvShowTitle}
                placeholder="Which TV show?"
                className="p-2 border-solid border border-black focus:border-primary-orange"
            />
            <button
                type="submit"
                onClick={updateQuoteHandler}
                className="submit-btn"
            >
                {value}
            </button>
        </div>
    )
}

export default Form
