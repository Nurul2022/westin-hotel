import React from 'react';
import notFound from '../../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <h3 className='text-danger text-center mt-5'>Oops! The requested url was not found on this server. <br />
                Please input valid url !!!</h3>
            <img className='w-50 rounded mx-auto d-block' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;