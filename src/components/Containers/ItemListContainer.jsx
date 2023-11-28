import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from '../Item/ItemList'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/ConfigFirebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
      const products = collection(db, 'products')
      getDocs(products).then((snapshot) => {
          if(snapshot.size !== 0) {
              const data = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
              }));
              const prodFiltrados = data.filter(
                (prod) => prod.categoria === categoriaId
              );
              setItems(categoriaId ? prodFiltrados : data);
            }
          });
          setLoading(false);
      
        }, [categoriaId]);



  return (
    <div>
         {loading ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        :  <ItemList items={items}/>
        }
    </div>
  )
}

export default ItemListContainer