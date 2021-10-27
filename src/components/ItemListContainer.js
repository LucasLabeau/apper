import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";

const ItemListContainer = (p) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async() => {
    const jsonData = await fetch('placeholderData.json');
    const data1 = await jsonData.json();
    const data = await data1.data;

    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 2000)
  }, []);

  return(
    <>
      <h5>{ p.greeting }</h5>
      <Container>
        <ItemList loading={ loading } products={ products }/>
      </Container>
    </>
  );
}

export default ItemListContainer;
