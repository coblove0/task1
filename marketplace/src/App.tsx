import { Routes, Route, Navigate } from 'react-router-dom';
import AuthButton from 'components/AuthButton/AuthButton';
import Catalog from 'components/Catalog/Catalog';
import ShoppingCart from 'components/ShoppingCart/ShoppingCart';
import CartPage from 'components/CartPage/CartPage';
import { Provider } from 'react-redux';
import { store } from 'store/reduxStore';
import { useTheme } from './context/ThemeContext';
import React from 'react';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from 'store/authAtom';
import { useNavigate } from 'react-router-dom';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const navigate = useNavigate();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Перенаправление на главную страницу при разлогировании
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // Перенаправляем на главную страницу
    }
  }, [isAuthenticated, navigate]);

  return (
    <Provider store={store}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Магазин</span>
        <button onClick={toggleTheme}>
          Переключить тему на {theme === 'light' ? 'темную' : 'светлую'}
        </button>
        <AuthButton />
        <ShoppingCart />
      </div>
      <Routes>
        {/* Главная страница с каталогом */}
        <Route path="/" element={<Catalog />} />
        {/* Страница корзины */}
        <Route path="/cart" element={isAuthenticated ? <CartPage /> : <Navigate to="/" />} />
      </Routes>
    </Provider>
  );
}

export default App;
