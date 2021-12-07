import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
import { getFirestore } from './getFirestore';

const ItemDetailContainer = (p) => {
  // VARIABLES
  const itemId = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // ESFECTO QUE SE EJECUTA CADA VEZ QUE CAMBIA EL ID DEL PARAMS
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const dbSearch = db.collection('items').doc(itemId.productId).get();
      dbSearch
        .then(resp => setProduct({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },2000);
    // eslint-disable-next-line
  }, [itemId]);

  // RENDER CONDICIONAL
  return(
    <>
    { loading ? <h1>Loading...</h1> :
      <ItemDetail p={ product } />
    }
    </>
  );
}
export default ItemDetailContainer;
