import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='text-center text-white'>
                <p>All rights reserved &copy; {date}</p>
            </div>
        </div>
    );
};

export default Footer;