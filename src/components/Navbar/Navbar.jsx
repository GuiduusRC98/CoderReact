import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <button className="logo">
        <img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px" />
      </button>
      <h1 className="logo">CADEP - TIENDA OFICIAL</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={'category/Hombre'}>Hombre</Link>
          </li>
          <li>
            <Link to={'category/Mujer'}>Mujer</Link>
          </li>
          <li>
            <Link to={'category/Electronico'}>Electronico</Link>
          </li>
          <li>
            <Link to={'category/Accesorio'}>Accesorio</Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
