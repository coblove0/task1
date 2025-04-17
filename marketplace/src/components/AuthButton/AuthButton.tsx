import React from 'react';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from 'store/authAtom';
import { useProductStore } from 'store/productStore';

const AuthButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  const toggleAuth = () => {
    console.log('Before toggle:', useProductStore.getState().products);
    setIsAuthenticated(!isAuthenticated);
    console.log('After toggle:', useProductStore.getState().products);
  };

  return (
    <button
      onClick={toggleAuth}
      style={{
        padding: '8px 16px',
        backgroundColor: isAuthenticated ? 'green' : 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {isAuthenticated ? 'Выйти' : 'Войти'}
    </button>
  );
};

export default AuthButton;
