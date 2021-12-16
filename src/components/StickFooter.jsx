import React, {useState} from 'react'
import AddQuote from './AddQuote'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './addquote.css'

import { useDispatch } from 'react-redux';
import { addQuote } from '../redux/quote/quote.actions'

// setting for modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        backgroundColor: '#f2f2f2',
        },
    };

// setting for modal
const appElement = document.getElementById('content');
Modal.setAppElement(appElement);


const StickFooter = () => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setIsOpen(false);
    }

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
        <div className="">
            <button
                id="add-button"
                className="fixed plus w-20 h-20 right-8 bottom-8 rounded-full"
                onClick={openModal}>
                <span className="plus-icon-border relative inline-block align-middle leading-none w-12 h-1 z-50 bg-current"></span>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

            <div 
            // ref={(_subtitle) => (subtitle = _subtitle) } 
            className="add-quote-wrapper">
                <p className="quotation">"</p>
                <form className="quote-form-wrapper" onSubmit={addQuoteHandler}>
                    <label htmlFor="quote">Quote</label>
                    <textarea
                        defaultValue='Type the quote..'
                        value={quote}
                        onChange={onChangeQuote}
                        
                        >
                    </textarea>
                    <label htmlFor="character">Name</label>
                    <input 
                        type="text" 
                        onChange={onChangeCharacter}
                        value={character}
                        placeholder="Who said?"
                        />
                    <label htmlFor="tvShowTitle">TV show</label>
                    <input 
                        type="text"
                        value={tvShowTitle}
                        onChange={onChangeTvShowTitle}
                        placeholder="Which TV show?"
                    />
                    <button
                        type="submit"
                        // onClick={addQuoteHandler}
                        className="submit-btn"
                    >
                        ADD
                    </button>
                </form>
                <button onClick={closeModal} className="close-btn">close
                </button>
            </div>
            </Modal>

        </div>
    )
}

export default StickFooter



