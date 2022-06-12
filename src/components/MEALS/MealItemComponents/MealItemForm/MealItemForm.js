import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  // here we set up the state for the form validity
  const [formValid, setFormValid] = useState(true);

  // here, since we need to access the amount of items, we can use a forwardRef
  const amountRef = useRef();

  // here we set up the submit handler to handle the submission of the form, which takes in an event
  // as the arg
  const submitHandler = (e) => {
    // here we make sure to call e.preventDefault() to avoid the browser reloading the page
    e.preventDefault();

    // now we can access the input from the input component, so that we can get the current value it has
    // and given the current.value will retrurn a string always, we set up another var, so we can turn the
    // string into a num
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;

    // now we can add a validation check to make sure it is a valid amount, and if it is not we will break
    // out 
    if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      // if we get here, we know the amount is not valid, so we set the state accordingly
      setFormValid(false);
      return;
    }

    // now we can execute a context method to add the amount, but we dont want to do that here, so we
    // call props and the function we want
    props.onAddToCart(enteredAmountNum);

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
          ref={amountRef}
          label="Amount" 
          input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1', 
            max: '5',
            step: '1',
            defaultValue: '1'
          }} />
        <button>+ Add</button>
        {!formValid && <h2>Error with Amount</h2>}
    </form>
  )
}

export default MealItemForm;