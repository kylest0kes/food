import React, { useState } from "react";
import Cart from "./components/CART/Cart/Cart";
import Header from "./components/LAYOUT/Header/Header";
import Meals from "./components/MEALS/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  // here we set up some state for showing the car
  const [cartVisible, setCartVisible] = useState(false);

  // here we set up a helper handler functions for showing or hiding the cart
  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  }

  return (
    // now i can wrap everything in the CartProvider componenet, giving everything inside, access to the
    // provider data
    <CartProvider>
      {/* here we can use a little shortcut to show the cart component based on the state of \cartVisible */}
      {cartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
