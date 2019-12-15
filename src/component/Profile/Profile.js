import React from "react";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    return (
        <div>
            Profile setting here!
            <button className='btn btn-primary' onClick={() => {
                history.push('/')
            }}>Go To Home</button>
        </div>
    );
};

export default Profile;
