// import React, {useState} from 'react'
// import { quoteReducer } from '../redux/quote/quote.reducers'
import { useDispatch } from 'react-redux'
// import UpdateQuoteForm from './Form/UpdateQuoteForm'

import Quote from './ListItem/Quote'

import { deleteQuote } from '../redux/quote/quote.actions'

import Modal from 'react-modal';
const appElement = document.getElementById('content');
Modal.setAppElement(appElement);

export const customStyles = {
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



const QuotesList = () => {
    // const [modalIsOpen, setIsOpen] = useState(false);
    
    // function openModal() {
    //     setIsOpen(true);
    // }
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     // subtitle.style.color = '#f00';
    // }
    // function closeModal() {
    //     setIsOpen(false);
    // }

    // const quoteLists = useSelector(state => state.quoteLists)

    const dispatch = useDispatch();
    
    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')){
            dispatch(deleteQuote(id))
        }
    }

    return (
        <div className="container mx-auto">
            <Quote 
                // openModal={openModal}
                deleteHandler={deleteHandler}
            >
            </Quote>
        </div>
    )
}


export default QuotesList

