import React from 'react';
import {Modal} from 'react-bootstrap';

const ModalComponent = ({open, onClose}) => {
    return (
        <Modal show={open} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary'>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;
