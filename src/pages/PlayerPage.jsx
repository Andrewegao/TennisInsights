// PlayerPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { players } from '../data/playersData';
import PlayerProfile from '../components/PlayerProfile';
import AceVsDoubleFaultChart from '../components/AceVsDoubleFaultChart';
import FirstServeWinChart from '../components/FirstServeWinChart';
import SurfaceWinPercentage from '../components/SurfaceWinPercentage';
import PerformanceMetricsRadar from '../components/PerformanceMetricsRadar';
import RankingHistory from '../components/RankingHistory';
import PlayerImage from '../components/PlayerImage';
import './PlayerPage.css';

const PlayerPage = () => {
  const { playerName } = useParams();
  const player = players.find((player) => player.name === playerName);

  if (!player) {
    return <div>Player not found.</div>;
  }

  return (
    <div className="player-page">
      <div className="left-column">
        <h1>{player.name}</h1>
        <PlayerImage player={player} className="player-image" />
        <div className="ranking-history-container">
          <RankingHistory player={player} className="ranking-history" />
        </div>
        <PlayerProfile player={player} />
      </div>
      <div className="right-column">
        <div className="section-row">
          <div className="section">
            {/* <h2>Surface Performance</h2> */}
            <SurfaceWinPercentage selectedPlayer={player.name} />
          </div>
          <div className="section">
            {/* <h2>Performance Metrics</h2> */}
            <PerformanceMetricsRadar selectedPlayer={player.name} />
          </div>
        </div>
        <div className="section-row">
          <div className="section">
            {/* <h2>Ace vs Double Fault</h2> */}
            <AceVsDoubleFaultChart selectedPlayer={player.name} />
          </div>
          <div className="section">
            {/* <h2>First Serve Win</h2> */}
            <FirstServeWinChart selectedPlayer={player.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;