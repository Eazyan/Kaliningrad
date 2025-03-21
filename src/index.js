import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

// Создаем корневой элемент React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
