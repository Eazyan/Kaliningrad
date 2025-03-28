import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './containers/HomePage';
import PetListPage from './containers/PetListPage';
import PetDetailPage from './containers/PetDetailPage';
import './App.css';

// Получаем имя приложения из переменных окружения
const APP_NAME = process.env.REACT_APP_APP_NAME || 'Petstore App';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>{APP_NAME}</h1>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetListPage />} />
          <Route path="/pets/:id" element={<PetDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} {APP_NAME}
        </p>
      </footer>
    </div>
  );
};

export default App; 