import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { players } from '../data/playersData';
import './HomePage.css';

const HomePage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  return (
    <div className="home-page">
      <div className="intro-message">
        <h1>Welcome to Tennis Player Stats</h1>
        <p>Select a player to view their stats</p>
      </div>
      <div className="player-dropdown">
        <select value={selectedPlayer} onChange={handlePlayerChange}>
          <option value="">Select a player</option>
          {players.map((player) => (
            <option key={player.name} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
        <Link
          to={selectedPlayer ? `/player/${selectedPlayer}` : '/'}
          className="view-stats-button"
        >
          View Stats
        </Link>
      </div>
    </div>
  );
};

export default HomePage;