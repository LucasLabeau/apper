import { useState, useContext, createContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({items}) => {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (products) => {
    setCartContent([
      ... cartContent,
      items
    ]);
  }

  return(
    <CartContext.Provider value={{
      cartContent,
      addToCart
    }}>
      {items}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
