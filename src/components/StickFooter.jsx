import React, {useState} from 'react'
import Modal from 'react-modal';
import './Form/form.css'
import {useAuthStatus} from '../Hooks/useAuthStatus'

import AddQuoteForm from './Form/AddQuoteForm'
import { useNavigate, useLocation } from 'react-router-dom';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

// for modal setting
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
    const {loggedIn} = useAuthStatus()
    const location = useLocation()
    const navigate = useNavigate()
    
    // const redirectLogin = () => {
    //     return <Navigate to='/Login' state={{ from: location }} />
    // }


    function openModalHandle() {
        if(loggedIn) {
            setIsOpen(true);
        } else {
            console.log(location)
            navigate('/Login', { from : location})

        }
    }
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     // subtitle.style.color = '#f00';
    // }
    
    function closeModal() {
        setIsOpen(false);
    }
    
    // : <Navigate to='/Login' state={{ from: location }} />

    return (
        <div className="">
            <button
                id="add-button"
                className="fixed bg-primary-orange hover:primary-orange-hover w-20 h-20 right-8 bottom-8 rounded-full"
                onClick={openModalHandle}
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



