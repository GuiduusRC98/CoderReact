import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../../ItemDetail/ItemDetail";

const Categorias = () => {
  const [product, setProduct] = useState({});
  const { category } = useParams();

  const fetchProducts = () => {
      fetch(`https://fakestoreapi.com/products/${category}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
   
  }

  useEffect(() => {
      fetchProducts();
  }, [])
  return (
    <div>
      <ItemDetail itemSelected={product}/>
    </div>
  );
};

export default Categorias;
