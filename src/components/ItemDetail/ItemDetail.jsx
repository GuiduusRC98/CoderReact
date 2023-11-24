import ItemCount from '../ItemCount/ItemCount';
import './itemdetails.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(0);
    const stock = 5;
    const navigate = useNavigate()
    const { addItem } = useContext(CartContext)

    const addShop = () =>{
        addItem(itemSelected, count);
    };

    const handleNavegation = () =>{
        navigate('/');
    }
    return (
        <div>
            <h6 className="card-title">{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70}/>
            <div className="card-description">
                <p>{itemSelected?.description}</p>
                
            </div>
            <span>Stock: {stock}</span>
            <p>${itemSelected?.price}</p>
            <div>
                <button onClick={handleNavegation}>Volver Inicio</button>
                <br></br>
                <button onClick={addShop}>Comprar</button>
                <ItemCount count={count} setCount={setCount} stock={stock}/>
            </div>
        </div>
    );
}

export default ItemDetail; 