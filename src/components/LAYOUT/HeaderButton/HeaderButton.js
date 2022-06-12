import React, { useContext } from 'react';
import CartIcon from '../../CART/CartIcon';
import CartContext from '../../../store/cart-context';

import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
  // now we can call the useContext hook and pass it the context for the cart in the file we set up, 
  // and we store it in a var
  const cartCtx = useContext(CartContext);

  // we set this var up so we can set the amount of the items in the cart properly, as we can have a time 
  // where someone could select 2 quantity of sushi, and it will be stored as 1 item with a quantity of 2
  // so we get the array and call reduce on it, which takes 2 args, 1 that is a function that will be
  // done to get a value from the array, and the second is a starting value
  const cartQuantity = cartCtx.items.reduce((currNum, item) => {
    // here we will get the current num, which is the 2nd arg to the reduce method, and then we add
    // that to the current item in the array and its amount, so we can get all the items, even if 1 food
    // has more than 1 amount
    return currNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default HeaderButton;