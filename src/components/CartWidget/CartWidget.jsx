import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => (
  <button className="cart-widget">
    <FontAwesomeIcon icon={faShoppingCart} />
    <span className="cart-count">3</span>
  </button>

);

export default CartWidget;