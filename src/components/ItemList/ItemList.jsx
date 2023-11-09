import { Link, useParams } from 'react-router-dom';
import './style.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';


const ItemList = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const fetchProducts = async () => {
      try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          return data;
      } catch (error) {
          console.error(error);
          return [];
      }
  };


useEffect(() => {
    const myFunction = async () => {
        if (id) {
            const productList = await fetchProducts();
            const idFormatted = id.includes("-") ? id.replace("-", " ") : id;

            const filterItems = productList.filter((product) => {
                return product.category === idFormatted;
            });
            setItems(filterItems);
        } else {
            const productList = await fetchProducts();
            setItems(productList);
        }
    };
    myFunction();
}, [id]);

return (
    <div className="item-list-container">
        {items.map((item) => (
            <Link className="stylesLink" to={"/item/" + item.id} key={item.id}>
                <Item
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                />
            </Link>
        ))}
    </div>
);
};


/* const ItemList = ({ listaproducto }) => {
  
  if (!listaproducto || listaproducto.length === 0) {
    return <p>No hay productos disponibles en esta categoría.</p>;
  }

  return (
    <div className="item-list-container">
      {listaproducto.map(producto => (
        <Link to={'item/' + producto.id} key={producto.id}>
          <Item
            title={producto.title}
            description={producto.description}
            price={producto.price}
            image={producto.image}
          />
        </Link>
      ))}
    </div>
  );
}; */

export default ItemList;
