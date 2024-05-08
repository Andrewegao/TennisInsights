// PlayerImage.js
import React from 'react';
import './PlayerImage.css';

const PlayerImage = ({ player }) => {
  const imagePath = `/images/${player.name.replace(' ', '_')}.jpg`;
  return <img className="player-image" src={imagePath} alt={player.name} />;
};

export default PlayerImage;