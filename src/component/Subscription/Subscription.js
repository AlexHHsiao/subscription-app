import React, {createRef, useEffect, useCallback, useState} from 'react';

const planSelection = createRef();
const seatInput = createRef();
const priceInput = createRef();

const Subscription = ({subscriptionData, getPreview, getUpdate, previewPrice}) => {
    const [updateBtnDisable, setUpdateBtnDisable] = useState(true);
    useEffect(() => {
        if (previewPrice) {
            priceInput.current.value = previewPrice;
        } else {
            planSelection.current.value = subscriptionData.plan;
            seatInput.current.value = subscriptionData.seats;
            priceInput.current.value = subscriptionData.cost;
            setUpdateBtnDisable(true);
        }
    }, [subscriptionData, previewPrice, setUpdateBtnDisable]);

    const onSubscriptionChange = useCallback(() => {
        if (isNaN(parseInt(seatInput.current.value, 10))) {
            seatInput.current.value = 1;
        }

        if (planSelection.current.value !== subscriptionData.plan || seatInput.current.value != subscriptionData.seats) {
            getPreview(planSelection.current.value, seatInput.current.value);
            setUpdateBtnDisable(false);
        } else {
            priceInput.current.value = subscriptionData.cost;
            setUpdateBtnDisable(true);
        }
    }, [subscriptionData, getPreview]);

    const onUpdate = useCallback(() => {
        getUpdate(planSelection.current.value, seatInput.current.value);
    }, [getUpdate]);

    return (
        <div className='card'>
            <div className='card-header'>
                Subscription
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-12 col-md-5'>
                        <div className='form-group'>
                            <label>Plan</label>
                            <select className='form-control' ref={planSelection}
                                    onChange={onSubscriptionChange}>
                                <option value='basic'>Basic</option>
                                <option value='good'>Good</option>
                                <option value='better'>Better</option>
                                <option value='best'>Best</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-5'>
                        <div className='form-group'>
                            <label>Seats</label>
                            <input type='number' className='form-control' ref={seatInput}
                                   onChange={onSubscriptionChange} min={1}
                            />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-2'>
                        <div className='form-group'>
                            <div className='form-group'>
                                <label>Price</label>
                                <input type='number' className='form-control' disabled
                                       ref={priceInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn btn-primary float-right' onClick={onUpdate}
                        disabled={updateBtnDisable}
                >
                    Update Subscription
                </button>
            </div>
        </div>
    );
};

export default Subscription;
