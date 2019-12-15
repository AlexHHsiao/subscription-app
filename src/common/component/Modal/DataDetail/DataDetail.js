import React from "react";

const DataDetail = ({data, title, color='grey'}) => (
    <div className='card'>
        <div className='card-header'>{title}</div>
        <div className='card-body'>
            <div className='form-group'>
                <label>Plan</label>
                <h5 style={{color: color}}>{data.plan}</h5>
            </div>

            <div className='form-group'>
                <label>Seats</label>
                <h5 style={{color: color}}>{data.seats}</h5>
            </div>

            <div className='form-group'>
                <label>Price</label>
                <h5 style={{color: color}}>{`$${data.cost}`}</h5>
            </div>
        </div>
    </div>
);

export default DataDetail;
