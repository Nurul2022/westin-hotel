import React from 'react';
import double1 from '../../../images/double/double1.png'
import double2 from '../../../images/double/double2.png'
import double3 from '../../../images/double/double3.png'
import double4 from '../../../images/double/double4.png'
import double5 from '../../../images/double/double5.png'
import double6 from '../../../images/double/double6.png'
import DoubleRoom from '../DoubleRoom/DoubleRoom';


const doubleRooms = [
    { id: 1, type: 'Exclusive One', img: double1 },
    { id: 2, type: 'Exclusive Two', img: double2 },
    { id: 3, type: 'Exclusive Three', img: double3 },
    { id: 4, type: 'Exclusive Four', img: double4 },
    { id: 5, type: 'Exclusive Five', img: double5 },
    { id: 6, type: 'Exclusive Six', img: double6 }
]

const DoubleRooms = () => {
    return (
        <div id='doubleroom' className='constainer'>
            <h1 className='text-center mt-5 text-primary'>Double Rooms</h1>
            <div className="row">
                {
                    doubleRooms.map(doubleRoom =><DoubleRoom
                    key={doubleRoom.id}
                    doubleRoom ={doubleRoom}
                    ></DoubleRoom>)
                }
            </div>
        </div>
    );
};

export default DoubleRooms;