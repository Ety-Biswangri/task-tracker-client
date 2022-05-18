import React from 'react';
import notFound from '../../images/notFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img className='img-fluid' src={notFound} alt="PageNotFoundImage" />
        </div>
    );
};

export default NotFound;