import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import Carts from './components/pages/Cart/Cart.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Carts/>} />
      </Routes>
      
      </BrowserRouter>
    
    
  );
}

export default App;
