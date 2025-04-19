import React, { useEffect } from 'react';
import { useProductStore } from 'store/productStore';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reduxStore';
import { setProducts } from 'store/reduxStore';
import { observer } from 'mobx-react-lite';
import { mobxStore } from 'store/poductStoreMobx';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from 'store/authAtom';

const CartPage = observer(() => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state: RootState) => state.products.products);
  const { syncWithRedux } = useProductStore();
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const navigate = useNavigate();

  // Перенаправление, если пользователь не авторизован
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // Перенаправляем на главную страницу
    }
  }, [isAuthenticated, navigate]);

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
          product.id === id ? { ...product, inCart: false, status: null } : product,
        ),
      ),
    );

    // Синхронизируем Zustand с Redux
    syncWithRedux();
  };

  const handleCheckout = (id: number) => {
    // Обновляем статус через MobX
    mobxStore.updateProductStatus(id, 'Оформлен');
  };

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => {
            // Получаем статус из MobX Store
            const mobxProduct = mobxStore.products.find((product) => product.id === item.id);
            const status = mobxProduct?.status || null;

            return (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <h2>{item.name}</h2>
                <p>Статус: {status}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Удалить
                </button>
                {status !== 'Оформлен' && (
                  <button
                    onClick={() => handleCheckout(item.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Оформить заказ
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', color: 'blue' }}>
        Вернуться на главную
      </Link>
    </div>
  );
});

export default CartPage;
