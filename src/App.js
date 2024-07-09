import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'
function App() {

  const[cartIsShown,SetCartIsShown] = useState(false);

  function showCartHandeler (){

    SetCartIsShown(true);
  }

  function hideCartHandler (){
 
    SetCartIsShown(false);
  }

  return (
    <CartProvider>
{cartIsShown && <Cart onClose ={hideCartHandler}/> }
<Header onShowCart={showCartHandeler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
