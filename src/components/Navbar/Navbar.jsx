import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { setTheme} = useContext(ThemeContext);
  return (
    <header>
      <button className="logo">
        <img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px" />
      </button>
      <Link to={'/'}>
      <h1 className="logo">CADEP - TIENDA OFICIAL</h1>
      </Link>
      <button onClick={() => setTheme((currentValue) => currentValue === 'light' ? 'dark' : 'light')}>Modo Oscuro/Claro</button>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink activeclassname="active" to={`category/women's-clothing`}>Mujer</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/category/men's-clothing">Hombre</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/electronics'>Electrónico</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/jewelery'>Accesorio</NavLink>
          </li>
          <li>
            <CartWidget/>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Navbar;
