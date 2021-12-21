import React, {useState} from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Form/form.css'

import AddQuoteForm from './Form/AddQuoteForm'
// import customStyles from './Modal/modal'
// import ModalParts from './ModalParts'

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

const StickFooter = () => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     // subtitle.style.color = '#f00';
    // }
    
    function closeModal() {
        setIsOpen(false);
    }
    

    return (
        <div className="">
            <button
                id="add-button"
                className="fixed bg-primary-orange hover:primary-orange-hover w-20 h-20 right-8 bottom-8 rounded-full"
                onClick={openModal}
            >
                <span className="plus-icon-border relative inline-block align-middle leading-none w-12 h-1 z-50 bg-current"></span>
            </button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <AddQuoteForm closeModal={closeModal} />
            </Modal>

        </div>
    )
}

export default StickFooter



