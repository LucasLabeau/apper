import { useState, useContext, createContext } from 'react';

// CREACIÓN Y EXPORTACIÓN DEL CONTEXT
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
  // VARIABLES
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // FUNCIÓN SUMAR PRECIO TOTAL
  const addPrice = () => {
    const reducer = cartContent.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
    setCartTotal(reducer.toFixed(2));
  }

  // FUNCIÓN AÑADIR AL CARRITO
  const addToCart = (products) => {
    setCartContent([
      ...cartContent,
      products
    ]);
    addPrice();
  }

  // FUNCIÓN QUITAR PRODUCTO DEL CARRITO
  const removeItem = (id) => {
    const newContent = cartContent.filter(item => item.product.id !== id);
    setCartContent(newContent);
    addPrice();
  }

  // FUNCIÓN QUITAR TODOS LOS PRODUCTOS
  const removeAll = () => {
    setCartContent([]);
    setCartTotal(0);
  }

  // FUNCIÓN PARA CHEQUEAR SI EL PRODUCTO ESTÁ
  const isInCart = (id) => {
    const filt = cartContent.filter(item => item.product.id === id);
    if (filt.length>0) {
      return true;
    } else {
      return false;
    }
  }

  // RENDER
  return(
    <CartContext.Provider value={{ cartContent, cartTotal, addToCart, isInCart, removeItem, removeAll, addPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
