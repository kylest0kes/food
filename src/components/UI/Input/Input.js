import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* we use the spread operator between the curly braces to ensure that any other key value 
        pairs on the props.input will be put into the input here, like type='text' and so on */}
        <input {...props.input} />
    </div>
  )
}

export default Input;