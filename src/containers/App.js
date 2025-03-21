import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import PetListPage from './PetListPage';
import PetDetailPage from './PetDetailPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Petstore App</h1>
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
          <p>&copy; {new Date().getFullYear()} Petstore App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
