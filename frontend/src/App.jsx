import ListBuyersComponent from './components/ListBuyersComponent';
import ListProducts from './components/ListProductsComponent';
import './styles.css'

const App = () => {
  return (
    <div>
      <h1>Información de Productos y Compradores</h1>
      <ListBuyersComponent />
      <ListProducts />
    </div>
  );
};

export default App
