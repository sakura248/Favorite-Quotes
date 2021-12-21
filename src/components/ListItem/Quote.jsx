import React , {useState} from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal';
import UpdateQuoteForm from '../Form/UpdateQuoteForm'

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

const Quote = ({deleteHandler}) => {
    const quoteLists = useSelector(state => state.quoteLists)

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalQuote, setModalQuote] = useState()
    
    function openModal(quote) {
        setIsOpen(true);
        setModalQuote(quote)
    }
    // function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    // }
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            {quoteLists &&
                quoteLists.map((quoteItem) => {
                    return(
                    <div key={quoteItem.id} className="flex flex-col sm:flex-row items-center m-8 sm:justify-between sm:w-10/12 sm:mt-9 sm:mb-9 sm:mx-auto sm:w-11/12" >
                        <blockquote className="mb-8 relative">
                            <ul onClick={() => openModal(quoteItem)} className="quote-ul flex flex-col items-center sm:items-start cursor-pointer pt-24 sm:pt-8">
                                <li className="quote quote-text my-3 text-lg text-center sm:text-left sm:text-base font-bold hover:animate-spin relative">
                                    {quoteItem.quote}
                                </li>
                                <li className="quote quote-name my-1">
                                    {quoteItem.character}
                                </li>
                                <li className="quote quote-show my-1">
                                    {quoteItem.tvShowTitle}
                                </li>
                            </ul>
                        </blockquote>   
                    <button onClick={() => deleteHandler(quoteItem.id)}>
                    <svg className="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                    </button>
                    </div>
                )})
            }
            {
                modalIsOpen && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <UpdateQuoteForm
                            closeModal={closeModal}
                            quoteItem={modalQuote}
                        />
                    </Modal>
                )
            }
        </div>
    )
}

export default Quote
