import React from 'react';
import CartIcon from '../../CART/CartIcon';

import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>Num</span>
    </button>
  )
}

export default HeaderButton;