import React, {useCallback} from 'react';
import {Modal} from 'react-bootstrap';

const ModalComponent = ({open, onClose}) => {
    const onCloseModal = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Modal show={open} onHide={onCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Success / Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>



            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={onCloseModal}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;
