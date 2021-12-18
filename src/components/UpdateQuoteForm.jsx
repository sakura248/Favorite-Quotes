import React, {useState} from 'react'
import { quoteReducer } from '../redux/quote/quote.reducers'
import ReactDOM from 'react-dom';
import { connect, useSelector } from 'react-redux'

import { editQuote, updateQuote, deleteQuote } from '../redux/quote/quote.actions'
import { useDispatch } from 'react-redux';

import Form from './Form/Form'

const UpdateQuoteForm = ({ closeModal, quoteItem}) => {
    // const quoteLists = useSelector(state => state.quoteLists)
    const id = quoteItem.id
    const [newQuote, setNewQuote] = useState(quoteItem.quote)
    const [newCharacter, setNewCharacter] = useState(quoteItem.character)
    const [newTvShowTitle, setNewTvShowTitle] = useState(quoteItem.tvShowTitle)
    
    const onChangeQuote= (e) => {setNewQuote(e.target.value)}
    const onChangeCharacter= (e) => {setNewCharacter(e.target.value)}
    const onChangeTvShowTitle= (e) => {setNewTvShowTitle(e.target.value)}
    
    const dispatch = useDispatch();

    const updateQuoteHandler = (e) => {
        e.preventDefault()
        if(newQuote && newCharacter && newTvShowTitle) {
            dispatch(updateQuote({
                id,
                newQuote,
                newCharacter,
                newTvShowTitle
            }))
            closeModal()
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
                <form className="quote-form-wrapper" onSubmit={updateQuoteHandler}>
                    {/* <label htmlFor="quote">Quote</label> */}
                    <Form 
                        onChangeQuote={onChangeQuote} 
                        onChangeCharacter={onChangeCharacter}
                        onChangeTvShowTitle={onChangeTvShowTitle}
                        updateQuoteHandler={updateQuoteHandler}
                        newQuote={newQuote} 
                        newCharacter={newCharacter}
                        newTvShowTitle={newTvShowTitle}
                        value={"UPDATE"}
                    
                    />
                    
                </form>
                <button className="close-btn" onClick={closeModal}>close</button>
            </div>
        </div>
    )
}

export default UpdateQuoteForm
