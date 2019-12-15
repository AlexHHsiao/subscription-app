import React, {Component, createRef} from 'react';
import ModalComponent from "./../../common/component/Modal/Modal";
import Spinner from "./../../common/component/Spinner/Spinner";
import {getCurrent, updateCurrent, getPreview} from "../../common/services/ApiService";
import Header from "../Header/Header";
import Subscription from "../Subscription/Subscription";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: true,
            showModal: false,
            subscriptionData: null,
            modalData: {
                type: 'Error'
            },
            previewPrice: null
        };
    }

    componentDidMount() {
        getCurrent().then(
            response => {
                this.setState({
                    showSpinner: false,
                    subscriptionData: response
                });
            }).catch(error => {
            this.setState({
                showSpinner: false,
                showModal: true,
                modalData: {
                    type: 'Error',
                    title: 'Something went wrong',
                    message: error.statusText
                }
            });
        });
    }

    onCloseModal = () => {
        this.setState({
            showModal: false
        })
    };

    getPreview = (plan, seats) => {
        this.setState({
            showSpinner: true
        });
        const body = {
            plan,
            seats
        };
        getPreview(body).then(
            response => {
                this.setState({
                    showSpinner: false,
                    previewPrice: response.cost
                });
            }).catch(error => {
            this.setState({
                showSpinner: false,
                showModal: true,
                modalData: {
                    type: 'Error',
                    title: 'Something went wrong',
                    message: error.statusText
                }
            });
        });
    };

    getUpdate = (plan, seats) => {
        this.setState({
            showSpinner: true
        });
        const body = {
            plan,
            seats
        };
        updateCurrent(body).then(
            response => {
                this.setState((prevState) => ({
                    showSpinner: false,
                    subscriptionData: response,
                    showModal: true,
                    previewPrice: null,
                    modalData: {
                        type: 'Success',
                        title: 'Update Success',
                        prevSubscription: {...prevState.subscriptionData},
                        newSubscription: response
                    }
                }));
            }).catch(error => {
            this.setState({
                showSpinner: false,
                showModal: true,
                modalData: {
                    type: 'Error',
                    title: 'Something went wrong',
                    message: error.statusText
                }
            });
        });
    };

    render() {
        const {showSpinner, showModal, modalData, subscriptionData, previewPrice} = this.state;

        return (
            <>
                <Spinner open={showSpinner}/>
                <ModalComponent open={showModal} onClose={this.onCloseModal} modalData={modalData}/>
                {subscriptionData ? (
                    <>
                        <Header getPreview={() => this.getPreview(subscriptionData.plan, subscriptionData.seats)}/>
                        <div className='container mt-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <Subscription
                                        subscriptionData={subscriptionData}
                                        getPreview={this.getPreview}
                                        getUpdate={this.getUpdate}
                                        previewPrice={previewPrice}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : ''
                }
            </>
        );
    }
}

export default Main;
