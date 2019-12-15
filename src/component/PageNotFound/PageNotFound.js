import React, {useCallback} from 'react';
import {useHistory} from "react-router-dom";
import './PageNotFound.scss';


const PageNotFound = () => {
    const history = useHistory();
    const redirectCallback = useCallback(() => {
        history.push('/');
    }, [history]);
    return (
        <div className='notFoundContainer'>
            <div className='notFoundContent'>
                <h4>The page you are looking does not exist!</h4> <br/>
                <button className='btn btn-primary mt-3' onClick={redirectCallback}>Go To Home
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;
