import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:playerName" element={<PlayerPage />} />
      </Routes>
    </Router>
  );
};

export default App;