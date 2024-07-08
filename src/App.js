import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const[cartIsShown,SetCartIsShown] = useState(false);

  function showCartHandeler (){

    SetCartIsShown(true);
  }

  function hideCartHandler (){

    SetCartIsShown(true);
  }

  return (
    <CartProvider>
      {cartIsShown && <div> Cart...</div>}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
