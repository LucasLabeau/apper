import { React, useState } from 'react';
import CartBuyer from './CartBuyer.js';
import CartAdder from './CartAdder.js';

const ItemCount = ({initial, stock, onAdd, purchased}) => {
  // VARIABLES
  const [cont, setCont] = useState(initial);

  // RENDER CONDICIONAL
  return (
    <>
      <div className="text-center m-2">
        { !purchased ? <CartAdder cont={cont} stock={stock} onAdd={onAdd} setCont={setCont} /> : <CartBuyer /> }
      </div>
    </>
  );
}

export default ItemCount;
