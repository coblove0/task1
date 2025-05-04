import React, { useEffect, useState } from 'react';
import AuthPage from './Components/AuthPage/AuthPage';

const clientId = '2dfdf0cac2cb410cbd75db58e2048dcc';
const clientSecret = '36cbe740ecc1443c8567063b8dc5e7e5'; // Не храните на клиенте в продакшене!
const redirectUri = 'http://localhost:3000';

function App() {

  return (
    <div>
      <AuthPage />
    </div>
  );
};

export default App;