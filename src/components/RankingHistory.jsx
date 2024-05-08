import React from 'react';
import './RankingHistory.css';

const RankingHistory = ({ player }) => {
  const screenshotPath = `/images/${player.name.replace(' ', '_')}_ranking.jpg`;
  return (
    <div>
      <h2>Ranking History</h2> {/* Title for the Ranking History */}
      <img className="ranking-history-image" src={screenshotPath} alt={`${player.name} Ranking History`} />
    </div>
  );
};

export default RankingHistory;
