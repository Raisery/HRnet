import './index.css'
import Header from '../../components/Header'
import NewEmployeeForm from '../../components/NewEmployeeForm'
import { PAGES } from '../../utils/constant'
import ReactModal from 'react-modal'
import { useState } from 'react'

ReactModal.setAppElement('#root')
/**
 * Component for display home page
 *
 * @returns The home page
 */
export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function handleCloseModal(event) {
        setModalIsOpen(false)
    }

    function handleOpenModal(event) {
        setModalIsOpen(true)
    }
    return (
        <div>
            <Header page={PAGES[0]} />
            <div className="home">
                <NewEmployeeForm
                    id="employee-form"
                    onSubmit={handleOpenModal}
                />
            </div>
            <ReactModal isOpen={modalIsOpen} className="modal-content">
                <p>
                    Employee Created!{' '}
                    <button
                        className="modal-close-cross"
                        onClick={handleCloseModal}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </p>
            </ReactModal>
        </div>
    )
}
