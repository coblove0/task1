import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
