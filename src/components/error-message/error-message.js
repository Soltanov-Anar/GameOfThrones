import React from 'react';
import './error.css';
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error' />
            <span><p>Something goes wrong : </p></span>
        </>
    )
}

export default ErrorMessage;

/* <img 
    src={process.env.PUBLIC_URL + '/img/error.jpg'}
    alt='error'
    /> */