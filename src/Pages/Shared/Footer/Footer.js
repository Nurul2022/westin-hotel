import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='text-center mt-5'>
            <h2><small>Copyright © {year}</small></h2>
        </div>
    );
};

export default Footer;