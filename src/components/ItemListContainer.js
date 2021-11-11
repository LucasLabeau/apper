import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";
// https://618214a284c2020017d89c79.mockapi.io/api/categories
const ItemListContainer = (p) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  const groupId = useParams();
  const free = useLocation();

  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("ApperMarket");

  const getCatName = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/categories');
    const resp = await jsonData.json();
    const result = await resp.filter(c => c.id === groupId.categoryId);
    setGreeting(result[0].name);
  }

  useEffect(() => {
    fetch('https://618214a284c2020017d89c79.mockapi.io/api/products', {mode: 'cors'})
      .then(resp => {return resp.json()})
      .then(data => {setProducts(data)})
      .then(setLoading(false))
  }, []);

  useEffect(() => {
    setLoading(true)
    if (groupId.categoryId !== undefined) {
      getCatName();
      setFilter(products.filter((p) => (p.category === parseInt(groupId.categoryId))));
    } else if (free.pathname === '/freeToPlay') {
      setGreeting("Free To Play");
      setFilter(products.filter((p) => (p.price === 0)));
    } else if (free.pathname === '/'){
      setGreeting("ApperMarket");
      setFilter(products);
    }
    setLoading(false);
  }, [groupId, free, products]);

  return(
    <>
      <h3>{ greeting }</h3>
      <Container>
        <ItemList loading={ loading } products={ filter }/>
      </Container>
    </>
  );
}

export default ItemListContainer;
