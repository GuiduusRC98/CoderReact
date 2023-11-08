import React, { useState, useEffect } from 'react';
import ItemList from '../../ItemList/ItemList';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [listaproducto, setListaproducto] = useState([]);

   const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setListaproducto(data))
      .catch((error) => console.log(error));
   
   }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <h2 className="item-list-title">Productos</h2>
    
    <div className="item-list-container">
      <ItemCount />
      <ItemList listaproducto={listaproducto} />
    </div>
    </div>
  );
};

export default ItemListContainer;