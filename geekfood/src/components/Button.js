import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
  <button style={
    {
      color: props.fontColor,
      backgroundColor : props.backgroundColor,
      borderRadius : props.borderRadius
    }
  }>{props.children}</button>
  
  )
}

export default Button;
