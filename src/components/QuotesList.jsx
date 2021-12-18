import React, {useState} from 'react'
import { quoteReducer } from '../redux/quote/quote.reducers'
import { connect, useSelector, useDispatch } from 'react-redux'
import UpdateQuoteForm from './UpdateQuoteForm'

import Quote from './ListItem/Quote'

import { editQuote, updateQuote, deleteQuote } from '../redux/quote/quote.actions'

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


    // const [state, setState] = useState({
    //     id: "",
    //     quote: "",
    //     character: "",
    //     tvShowTitle: ""
    //     });
    // const [status, setStatus] = useState({
    //     editing: false,
        // add: false
        // }); 

    const quoteLists = useSelector(state => state.quoteLists)

    const dispatch = useDispatch();
    
    const deleteHandler = (id) => {
        // console.log('deleted', id)
        if(window.confirm('Are you sure?')){
            dispatch(deleteQuote(id))
        }
    }

    const editHandler = (quoteItem) => {
        console.log('supposed to open')
        openModal()
        // dispatch(editQuote(quote))
    //     const {id, quote, character, tvShowTitle} = quoteItem
    //     setState({
    //         ...state,
    //         id: id,
    //         quote: quote,
    //         character: character,
    //         tvShowTitle: tvShowTitle
    //     });
    //     setStatus({ ...status, editing: true });
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        // setState({ ...state, [name]: value });
        ;
    }

    const submitUpdateForm = (e) => {
        e.preventDefault();
        // setState({ ...state})

        // dispatch(updateQuote())
        // setStatus({ ...status, editing: false });
    }

    // let subtitle;
    
    



    return (
        <>
            <Quote 
                openModal={openModal}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
            >
            </Quote>

            {/* {
                quoteLists.map((quote) => (
                    <div key={quote.id} className="flex flex-col items-center m-8">
                        <div onClick={openModal}>
                            <Modal
                                isOpen={modalIsOpen}
                                // onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                            >
                                <UpdateQuoteForm
                                    id={quote.id}
                                    closeModal={closeModal}
                                />
                            </Modal>
                        </div>
                    <button onClick={() => deleteHandler(quote.id)}>Delete</button>

                    </div>
                ))
            } */}
        </>
    )
}


export default QuotesList

