import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";

const ItemListContainer = (p) => {
  const [products, setProducts] = useState([]);
  const groupId = useParams();
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("ApperMarket");

  const getCat = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/categories');
    const data = await jsonData.json();
    const result = await data.filter(c => c.id === groupId.categoryId);
    setGreeting(result[0].name);
  }

  const getCatProducts = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/products');
    const data = await jsonData.json();
    const result = data.filter(item => item.category === parseInt(groupId.categoryId));
    setProducts(result);
  }

  const getProducts = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/products');
    const data = await jsonData.json();
    setProducts(data);
  }

  useEffect(() => {
    setTimeout(() => {
      if (groupId.categoryId !== undefined) {
        getCatProducts();
        getCat();
      } else {
        getProducts();
        setGreeting("ApperMarket");
      }
      setLoading(false);
    }, 2000)
  }, [groupId]);

  return(
    <>
      <h3>{ greeting }</h3>
      <Container>
        <ItemList loading={ loading } products={ products }/>
      </Container>
    </>
  );
}

export default ItemListContainer;
