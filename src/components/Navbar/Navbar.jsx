import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <header>
      <button class="logo"
        ><img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px"
      /></button>
      <h1 class="logo">CADEP - TIENDA OFICIAL</h1>
      <nav class="navbar">
        <ul>
            <li><button>Camisetas</button></li>
            <li><button>Shorts</button></li>
            <li><button>Botines</button></li>
            <li><button>Accesorio</button></li>
            <li><CartWidget/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;