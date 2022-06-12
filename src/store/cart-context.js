import React from "react";

// here i am beginning the setup of the context api by setting some inital values that are 
// contained in an object, and passed to createContext, and we store it in a variable, that we then
// can export
const CartContext = React.createContext({
    items: [], 
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;