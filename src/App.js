import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import Categorias from './components/pages/Categorias/Categorias';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<Categorias/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      
      </BrowserRouter>
    
    
  );
}

export default App;
