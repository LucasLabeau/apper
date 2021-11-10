import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";

const ItemListContainer = (p) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const groupId = useParams();
  const free = useLocation();
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("ApperMarket");

  const getProducts = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/products');
    const resp = await jsonData.json();
    setData(resp);
  }

  const getCat = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/categories');
    const resp = await jsonData.json();
    const result = await resp.filter(c => c.id === groupId.categoryId);
    setGreeting(result[0].name);
  }

  const getCatProducts = () => {
    getProducts();
    const result = data.filter(item => item.category === parseInt(groupId.categoryId));
    setProducts(result);
  }

  const getFreeProducts = async() => {
    getProducts();
    const result = await data.filter(item => item.price === 0);
    setProducts(result);
  }

  const setAllProducts = () => {
    getProducts();
    setProducts(data);
  }

  useEffect(() => {
    if (groupId.categoryId !== undefined) {
      getCatProducts();
      getCat();
    } else if (free.pathname === '/freeToPlay') {
      getFreeProducts();
      setGreeting("Free To Play");
    } else if (free.pathname === '/'){
      setAllProducts();
      setGreeting("ApperMarket");
    }
    setLoading(false);
  }, [groupId, free]);

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
