import React from 'react';
import Banner from '../Banner/Banner';
import DoubleRooms from '../DoubleRooms/DoubleRooms';
import SingleRoom from '../SingleRoom/SingleRoom';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SingleRoom></SingleRoom>
            <DoubleRooms></DoubleRooms>
        </>
    );
};

export default Home;