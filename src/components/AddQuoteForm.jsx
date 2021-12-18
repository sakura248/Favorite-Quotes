import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { useDispatch } from 'react-redux';
import { addQuote } from '../redux/quote/quote.actions'

const AddQuoteForm = ({closeModal}) => {

    const [quote, setQuote] = useState("")
    const [character, setCharacter] = useState("")
    const [tvShowTitle, setTvShowTitle] = useState("")
    
    const onChangeQuote= (e) => {setQuote(e.target.value)}
    const onChangeCharacter= (e) => {setCharacter(e.target.value)}
    const onChangeTvShowTitle= (e) => {setTvShowTitle(e.target.value)}
    
    const dispatch = useDispatch();

    const addQuoteHandler = (e) => {
        e.preventDefault()
        if(quote && character && tvShowTitle) {
            dispatch(addQuote({
                quote,
                character,
                tvShowTitle
            }))
            closeModal()
            // setQuote("")
            // setCharacter("")
            // setTvShowTitle("")
        }
        //  else {
        //     alert('please fill in all fields!')
        // }
    }

    return (
        <div>
            <div 
            // ref={(_subtitle) => (subtitle = _subtitle) } 
            className="add-quote-wrapper">
                <p className="quotation text-7xl">"</p>
                <form className="quote-form-wrapper" onSubmit={addQuoteHandler}>
                    {/* <label htmlFor="quote">Quote</label> */}
                    <textarea
                        defaultValue='Type the quote..'
                        value={quote}
                        onChange={onChangeQuote}
                        className="p-2 border-solid border border-black focus:border-primary-orange"
                        >
                    </textarea>
                    {/* <label htmlFor="character">Name</label> */}
                    <input 
                        type="text" 
                        onChange={onChangeCharacter}
                        value={character}
                        placeholder="Who said?"
                        className="p-2 border-solid border border-black focus:border-primary-orange"
                        />
                    {/* <label htmlFor="tvShowTitle">TV show</label> */}
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
                        ADD
                    </button>
                </form>
                <button onClick={closeModal} className="close-btn">close
                </button>
            </div>
        </div>
    )
}

export default AddQuoteForm
