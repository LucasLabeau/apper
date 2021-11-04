import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";

const FreePlay = () => {
  const [products, setProducts] = useState([]);

  const getFreeProducts = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/products');
    const data = await jsonData.json();
    const result = data.filter(item => item.price === 0);
    setProducts(result);
  }

  useEffect(() => {
    getFreeProducts();
  });

  return(
    <>
      <h3>Free to Play</h3>
      <Container>
        <ItemList products={ products }/>
      </Container>
    </>
  )
}

export default FreePlay;
