import React, { useContext } from "react";
import Modal from "../../UI/Modal/Modal";

import CartContext from "../../../store/cart-context";

import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  // her we call out to the context
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // here we set up the add and remove functions for the cart item to use
  const cartItemAddHandler = (item) => {

  };

  const cartItemRemoveHandler = (id) => {

  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          // we call the bind method on both of these below functions, so that we can pre-configure the
          // args for the functions
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
