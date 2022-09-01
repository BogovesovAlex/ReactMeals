import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => setcartIsShown(true);

  const hideCartHandler = () => setcartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCartHandler={hideCartHandler}/>}
      <Header onShowCartHandler={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
