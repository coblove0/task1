import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButton from 'components/AuthButton/AuthButton';
import Catalog from 'components/Catalog/Catalog';
import ShoppingCart from 'components/ShoppingCart/ShoppingCart';
import CartPage from 'components/CartPage/CartPage';
import { Provider } from 'react-redux';
import { store } from 'store/reduxStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Магазин</span>
          <AuthButton />
          <ShoppingCart />
        </div>
        <Routes>
          {/* Главная страница с каталогом */}
          <Route path="/" element={<Catalog />} />
          {/* Страница корзины */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
