import React from 'react';
import "./Button.scss";

const Button = ({text}) => {
  return (
    <div className='button'>{text}</div>
  )
}

export default Button