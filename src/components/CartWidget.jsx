import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../context/cartContext';

const CartWidget = () => {
  const { productQuantity } = useContext(CartContext)
  return(
  <button className="cart-widget">
    <FontAwesomeIcon icon={faShoppingCart} />
    <span className="cart-count">{productQuantity}</span>
  </button>
)
  };

export default CartWidget;