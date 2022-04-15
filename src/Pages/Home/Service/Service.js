import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id, name, img, description, rent} = service;
    const navigate = useNavigate();
    const navigateToSingleRoomDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3> {name}</h3>
            <p>Rent: {rent}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToSingleRoomDetail(id)} className='btn btn-primary'>BOOK NOW: {name}</button>

            
        </div>
    );
};

export default Service;

// Vanilla CSS used 