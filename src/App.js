import React, { Fragment } from "react";
import Cart from "./components/CART/Cart/Cart";
import Header from "./components/LAYOUT/Header/Header";
import Meals from "./components/MEALS/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
