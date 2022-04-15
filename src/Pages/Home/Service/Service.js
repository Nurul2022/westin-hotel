import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const {name, img, description, rent} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3> {name}</h3>
            <p>Rent: {rent}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>BOOK NOW: {name}</button>

            
        </div>
    );
};

export default Service;

// Vanilla CSS used 