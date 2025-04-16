import React, { useEffect } from 'react';
import { useProductStore } from 'store/productStore';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reduxStore';
import { setProducts } from 'store/reduxStore';

function CartPage() {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state: RootState) => state.products.products);
  const { syncWithRedux } = useProductStore();

  // Синхронизация Zustand с Redux при загрузке компонента
  useEffect(() => {
    syncWithRedux(); // Синхронизируем Zustand с Redux
  }, [syncWithRedux]);

  // Фильтруем товары, которые находятся в корзине
  const cartItems = reduxProducts.filter((product) => product.inCart);

  const handleRemoveFromCart = (id: number) => {
    // Обновляем Redux
    dispatch(
      setProducts(
        reduxProducts.map((product) =>
          product.id === id ? { ...product, inCart: false } : product,
        ),
      ),
    );

    // Синхронизируем Zustand с Redux
    syncWithRedux();
  };

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <h2>{item.name}</h2>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', color: 'blue' }}>
        Вернуться на главную
      </Link>
    </div>
  );
}

export default CartPage;
