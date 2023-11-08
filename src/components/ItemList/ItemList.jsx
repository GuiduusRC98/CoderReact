import { Link } from 'react-router-dom';
import './style.css';
import Item from '../Item/Item';

const ItemList = ({ listaproducto }) => {

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
};

export default ItemList;
