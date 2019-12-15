import React, {Component} from 'react';
import ModalComponent from "./../../common/component/Modal/Modal";
import Spinner from "./../../common/component/Spinner/Spinner";
import {getCurrent, updateCurrent, getPreview} from "../../common/services/ApiService";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: true,
            showModal: false,
            subscriptionData: null,
            error: null
        };
    }

    componentDidMount() {
        getCurrent().then(
            response => {
                this.setState({
                    showSpinner: false,
                    subscriptionData: response
                })
            }).catch(error => {
            this.setState({
                showSpinner: false,
                showModal: true
            })
        })
    }

    onCloseModal = () => {
        this.setState({
            showModal: false
        })
    };

    render() {
        const {showSpinner, showModal, error, subscriptionData} = this.state;

        return (
            <>
                <Spinner open={showSpinner}/>
                <ModalComponent open={showModal} onClose={this.onCloseModal}/>
                <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                    <span className="navbar-brand mb-0 h1">Subscription App</span>

                    <form className="form-inline">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Currency</label>
                            </div>
                            <select className="custom-select">
                                <option value='USD'>USD</option>
                                <option value='CNY'>CNY</option>
                                <option value='HKD'>HKD</option>
                            </select>
                        </div>
                    </form>


                </nav>
            </>
    );
    }
    }

    export default Main;
