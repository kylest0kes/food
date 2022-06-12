import React from 'react';

import classes from './Input.module.css';

// here we wrap this whole component in the forwardRef function from the React library, so that this
// component will accept an outside ref, the one we set up in the meal item form
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* we use the spread operator between the curly braces to ensure that any other key value 
        pairs on the props.input will be put into the input here, like type='text' and so on */}
        {/* we also set the ref property to the ref that we pass into this component, after wrapping
        it in the forwardRef function, so that it can take the ref we pass to it from the
        meal item form component */}
        <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input;