import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './SingleRoom.css'


const SingleRoom = () => {

    const [SingleRoom, setSingleRoom] = useState([]);

    useEffect(() => {
        fetch('single.json')
            .then(res => res.json())
            .then(data => setSingleRoom(data))
    }, [])

    return (
        <div id='SingleRoom' className='container'>
            <div className="row mt-5">
                <h1 className='SingleRoom-title'>Single Rooms</h1>
                <div className='SingleRoom-container'>
                    {
                        SingleRoom.map(service => <Service
                            key={service.id}
                            service={service}


                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;

// Vanilla CSS used 