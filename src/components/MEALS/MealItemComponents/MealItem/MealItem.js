import React, { useContext } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  // here we set up the use of context and store it in a var
  const cartCtx = useContext(CartContext);

  // a little helper to format price/
  const price = `$${props.price.toFixed(2)}`;

  // here we set up the function to add the item to the cart, so we can pass it to the MealItemForm
  // as a prop
  const onAddToCartHandler = (amount) => {
    // now we can all the addItem method that we set up earlier in the context
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
