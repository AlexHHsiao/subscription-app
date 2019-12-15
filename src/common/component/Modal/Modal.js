import React, {useCallback} from 'react';
import {Modal} from 'react-bootstrap';
import DataDetail from "./DataDetail/DataDetail";
import errorIcon from './../../images/error.svg';

const modalType = {
    Success: ({prevSubscription, newSubscription}) => {
        return (
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <DataDetail title='Previous Subscription' data={prevSubscription}/>
                </div>

                <div className='col-sm-12 col-md-6 mt-sm-2'>
                    <DataDetail title='Updated Subscription' data={newSubscription} color='skyblue'/>
                </div>
            </div>
        );
    },
    Error: ({message}) => {
        return (
            <div className='text-center'>
                <div className='alert alert-danger'>
                    <img src={errorIcon} alt='' style={{width: '50px', height: '50px'}}/> <br/>
                    {message} <br/>
                    Please retry later or check your server
                </div>
            </div>
        );
    }
};

const ModalComponent = ({open, onClose, modalData}) => {
    const onCloseModal = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Modal size='lg' show={open} onHide={onCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalType[modalData.type](modalData)}
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
