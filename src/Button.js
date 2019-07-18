import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div className='button' onClick={props.onclick}>{props.text}</div>
    )
}

export default Button