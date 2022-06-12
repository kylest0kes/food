// in here i have a CartProvider component, which is going to be responsible for managing the 
// cart context data and provide that context to all the components that need it
import CartContext from "./cart-context";

const CartProvider = props => {
    // here we can set up the functions that we will pass to the context 
    const addItemHandler = item => {};
    const removeItemHandler = item => {};
    
    // this is a helper variable, so that we can add all the logic for managing the data to this 
    // component. we set up the data that we would have set in the context file
    const cartContext = {
        items: [], 
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    // given this is just a component that helps mangae the cart context, and provide it to whatever 
    // components need it, we can wrap the provider from the CartContext, and in it we pass props.children
    // so that whatever we pass in between the CartProvider, will have the context provided
    // and as we should, we pass a value parameter to the provider which is the context we set up above
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;