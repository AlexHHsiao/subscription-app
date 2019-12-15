import React, {useEffect} from 'react';
import './Spinner.scss';


const Spinner = ({open}) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add('clearBody');
        } else {
            document.body.classList.remove('clearBody');
        }
    }, [open]);

    return open ? (
        <div className='spinnerContainer'>
            <div className="spinnerContent">
                <div className='spinner-border' style={{width: '75px', height: '75px'}}></div>
            </div>
        </div>
    ) : '';
};

export default Spinner;
