import React, { Fragment } from "react";
import Header from "./components/LAYOUT/Header/Header";
import Meals from "./components/MEALS/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
