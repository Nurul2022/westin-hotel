import React from 'react';
import { useParams } from 'react-router-dom';

const SingleRoomDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>Welcome to Single Room Detail: {serviceId}</h3>
        </div>
    );
};

export default SingleRoomDetail;