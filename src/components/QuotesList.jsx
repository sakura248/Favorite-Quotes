// import React, {useState} from 'react'
// import { quoteReducer } from '../redux/quote/quote.reducers'
import { useDispatch } from 'react-redux'
// import UpdateQuoteForm from './Form/UpdateQuoteForm'

import Quote from './ListItem/Quote'

import { deleteQuote } from '../redux/quote/quote.actions'

import {useAuthStatus} from '../Hooks/useAuthStatus'
import { useNavigate, useLocation } from 'react-router-dom';

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

    const {loggedIn} = useAuthStatus()
    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch();
    
    const deleteHandler = (id) => {
        if(loggedIn) {
            if(window.confirm('Are you sure?')){
                dispatch(deleteQuote(id))
            }
        } else {
            console.log(location)
            navigate('/Login', { from : location})
        }
    }

    const favHandler = (id) => {
        if(loggedIn) {
            console.log('fave!')
            // setIsOpen(true);
        } else {
            console.log(location)
            navigate('/Login', { from : location})
        }
    } 



    return (
        <div className="container mx-auto">
            <Quote 
                // openModal={openModal}
                favHandler={favHandler}
                deleteHandler={deleteHandler}
            >
            </Quote>
        </div>
    )
}


export default QuotesList

