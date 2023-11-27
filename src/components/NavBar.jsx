import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header>
    <button className="logo">
        <img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px" />
      </button>
      <h1 className="logoName">CADEP - TIENDA OFICIAL</h1>
      <nav className="navbar">
      <ul>
        <li>
        <Link className="linkCadep" to="/">Catálogo</Link>
          </li>
          <li>
          <Link className="linkCadep" to="/categoria/remeras">Remeras</Link>
          </li>
          <li>
          <Link className="linkCadep" to="/categoria/pantalones">Pantalones</Link>
          </li>
          <li>
          <Link className="linkCadep" to="/categoria/medias">Medias</Link>
          </li>
          <li>
          <Link className="linkCadep" to="/categoria/accesorio">Accesorios</Link>
          </li>
          <li>
          <Link className="linkCadep" to="/cart">
            <CartWidget/>
            </Link>
          </li>
        </ul>
      </nav>
  </header>
  )
}

export default NavBar