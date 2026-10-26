import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found');
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
