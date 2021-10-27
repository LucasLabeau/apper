import { React, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const ItemCount = ({initial, stock, onAdd}) => {
  const [cont, setCont] = useState(initial);


  const masClick = () => {
    if (cont < stock) {
        setCont(cont+1);
    }
  }

  const menosClick = () => {
    if (cont > 1) {
      setCont(cont-1);
    }
  }

  return (
    <>
      <InputGroup>
        <Button variant="outline-primary" onClick={ menosClick } disabled={ cont === 1 || stock <= 0 }>-</Button>
        <FormControl className="text-center" value={ stock > 0 ? cont : 0 } />
        <Button variant="outline-primary" onClick={ masClick } disabled={ cont === stock || stock <= 0 }>+</Button>
      </InputGroup>
      <Button variant="success" onClick={ () => onAdd(cont) } disabled={ stock <= 0 } style={{marginTop: '7px'}}>Add to cart</Button>
    </>
  );
}

export default ItemCount;
