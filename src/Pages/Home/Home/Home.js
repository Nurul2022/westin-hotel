import React from 'react';
import Banner from '../Banner/Banner';
import DoubleRooms from '../DoubleRooms/DoubleRooms';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <DoubleRooms></DoubleRooms>
        </>
    );
};

export default Home;