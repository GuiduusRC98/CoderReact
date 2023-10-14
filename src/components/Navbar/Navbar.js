import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <header>
      <a href="#" class="logo"
        ><img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px"
      /></a>
      <a href="#" class="logo">CADEP - TIENDA OFICIAL<span>.</span></a>
      <nav class="navbar">
        <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Shorts</a></li>
            <li><a href="#">Botines</a></li>
            <li><a href="#">Accesorio</a></li>
            <li><CartWidget/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;