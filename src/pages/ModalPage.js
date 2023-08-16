import {useState} from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);


    const handleClick = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I accept</Button>
        </div>
    )

    return (
        <div className="relative">
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {
                showModal &&
                <Modal onClose={handleClose} actionBar={actionBar}>
                    <p>
                        Here is an important agreement for you to accept
                    </p>
                </Modal>
            }
        </div>
    )
}