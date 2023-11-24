import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Carts from './pages/Cart/Cart.jsx'
import ThemeProvider  from './context/ThemeProvider.js';
import CartProvider from './context/CartProvider.js';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Carts/>} />
      </Routes>
      </CartProvider>
      </ThemeProvider>
      </BrowserRouter>
    
    
  );
}

export default App;
