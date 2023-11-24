import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { ThemeContext } from '../../context/ThemeContext';

const ItemListContainer = () => {
  return (
    <ThemeContext.Consumer>
      {(colorTheme) => (
      <div style={{backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray'}}>
        <h2 className="item-list-title">Productos</h2>
        
        <div className="item-list-container">
          <ItemList/>
        </div>
        </div>
        )}
    </ThemeContext.Consumer>
  );
};

export default ItemListContainer;