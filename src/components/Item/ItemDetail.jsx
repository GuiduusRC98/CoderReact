import React, { useContext, useState } from 'react'
import { Image, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({details}) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
      setCantidad(cantidad);
      addToCart(details, cantidad);
  };

  return (
    <div className='row m-auto'>
        <div className='col-12 col-md-6 text-center'>
            <Image
             variant="top" 
             src={details.imagen}
             alt={details.categoria}
             width={500}
             height={400}
            />
        </div>
        <div className='col-12 col-md-6'>
        <h1>Artículo {details.nombre}</h1>
        <h3>Categoría: {details.categoria}</h3>
        <h3>Precio: $ {details.precio}</h3>
        <h4>Descripción: {details.descripcion}</h4>
        <h4>Stock: {details.stock}</h4>
        {cantidad === 0 ? (
          <Button variant="Light">
                    <ItemCount stock={details.stock} initial={1} onAdd={onAdd} />
                    </Button>
                ) : (
                  <Button variant="dark">
                    <Link to="/cart">Ir al carrito</Link>
                    </Button>
                    )}
                    <br/>
                    <Button variant="warning">
                    <Link to="/">Seguir comprando</Link>
                    </Button>
        </div>
    </div>
  )
}

export default ItemDetail