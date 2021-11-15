import { useState, useContext, createContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addPrice = () => {
    const reducer = cartContent.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
    setCartTotal(reducer.toFixed(2));
  }

  const addToCart = (products) => {
    setCartContent([
      ...cartContent,
      products
    ]);
    addPrice();
  }

  const removeItem = (id) => {
    const newContent = cartContent.filter(item => item.product.id !== id);
    setCartContent(newContent);
    addPrice();
  }

  const removeAll = () => {
    setCartContent([]);
    setCartTotal(0);
  }

  const isInCart = (id) => {
    const filt = cartContent.filter(item => item.product.id === id);
    if (filt.length>0) {
      return true;
    } else {
      return false;
    }
  }

  return(
    <CartContext.Provider value={{ cartContent, cartTotal, addToCart, isInCart, removeItem, removeAll, addPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
