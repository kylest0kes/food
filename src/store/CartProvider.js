// in here i have a CartProvider component, which is going to be responsible for managing the 
// cart context data and provide that context to all the components that need it
import { useReducer } from "react";
import CartContext from "./cart-context";

// here we define a default 'cart' state to be able to have an easy ref to it for the reducer
const defalutState = {
    items: [],
    totalAmount: 0
};

// here we add in the reducer that we plan to use
const cartReducer = (state, action) => {
    // now we can set up logic to react, based on the type of action that is dispatched
    if (action.type === 'ADD') {
        // if the action is add, we want to get a new list of the items (as it is important to not change
        // the existing state, but to work and update a new copy), as well as an updated total amount
        // of items in the cart
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        // in between doing this, we want to check and see if the item being added to the cart, already is
        // in the cart. we can do this by calling findIndex (a built in JS method) that finds an index of
        // an item in an array. this method takes a function that should return true if the index is
        // the item we are looking for and false if its not
        const exists = state.items.findIndex(item => item.id === action.item.id)

        // then we get the item that we are looking for, by using the index we got from the exists var
        // above
        const existingItem = state.items[exists];

        // here is a helper var for some of the logic being implemented below
        let updatedItems;

        // here we check to see if there is an existing item in the cart. if there is not, the existingItem
        // var will be undefined, and this code wont run
        if (existingItem) {
            // if the item is in the card, we want to copy all of that items info, and only update the amount
            // to reflect the update made by the user
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };

            // then we want to update the items in the cart array to have all the items from the cart state
            // we have in the reducer, this ensures we are working with a new copy and not updating the
            // existing state
            updatedItems = [...state.items]

            // then in the updated items array, we want to find the item that needs to be updated by using 
            // the index we got above, and we set it to the new updated item in the updatedItem var
            updatedItems[exists] = updatedItem;
        } else {
            // now if it is the first time the item is added to the array, we will hit this block
            // which now we will concat the item into the carts reducer state items array
            updatedItems = state.items.concat(action.item);
        }
        
        
        // now we can update the state with all of the info we have here
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        } 
    } 
    if (action.type === 'DELETE') {

    }
    // this function returns a new state, so we set it to have the defaultState from above, if none of the
    // actions are hit
    return defalutState;
};

const CartProvider = props => {
    // now we can use the useReducer hook. and we know the useReducer will give us 2 items, so with
    // array destructuring we can pull out those values and have them as their own vars from the hook.
    // the first on being the cart state we want to deal with, and the second is the function that will
    // look for the actions and dispatch actions based on whats asked for
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defalutState);

    // here we can set up the functions that we will pass to the context 
    const addItemHandler = item => {
        // now we can call the function declared above from the useReducer hook, to dispatch an action
        // and adjust the state accordingly
        // we set up the action as an object that takes in a type and what we want to send, which is the
        // item that we take in from the function to be able to remove the chosen item
        dispatchCartAction({
            type: 'ADD',
            item: item
        });
    };

    const removeItemHandler = id => {
        // now we can call the function declared above from the useReducer hook, to dispatch an action
        // and adjust the state accordingly
        // we set up the action as an object that takes in a type and what we want to send, which is the
        // id that we take in from the function
        dispatchCartAction({
            type: 'DELETE',
            id: id
        });
    };
    
    // this is a helper variable, so that we can add all the logic for managing the data to this 
    // component. we set up the data that we would have set in the context file
    const cartContext = {
        // now we can set the context to look to the state that we have for the cart, using the reducer
        // hook
        items: cartState.items, 
        totalAmount: cartState.totalAmount,
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