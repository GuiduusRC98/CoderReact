
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Provider from './context/cartContext';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Provider>
    <BrowserRouter>
      <NavBar/>      
      <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a nuestra tienda!"/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/details/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    );
}

export default App;
