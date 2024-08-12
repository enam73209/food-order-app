import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from 'react';
import CartProvider from "./store/CartProvider";

function App() {
  const[cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setcartIsShown(true);
  }
  const hideCartHandler=()=>{
    setcartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown &&  <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart ={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
