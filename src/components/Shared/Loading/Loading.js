import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ minHeight: "70vh" }} className="d-flex align-items-center justify-content-center">
            <div>
                <p className='text-center text-primary fw-bold fs-3'> <Spinner animation="border" variant="primary" /></p>
            </div>
        </div>
    );
};

export default Loading;