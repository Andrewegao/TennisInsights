import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { players } from '../data/playersData';
import './PerformanceMetricsRadar.css';

const PerformanceMetricsRadar = ({ selectedPlayer }) => {
  const playerData = players.find((player) => player.name === selectedPlayer);

  const data = [
    { metric: 'First Serve Won', value: playerData?.performanceMetrics.firstServeWinPercentage || 0 },
    { metric: 'Second Serve Won', value: playerData?.performanceMetrics.secondServeWinPercentage || 0 },
    { metric: 'Break Points Saved', value: playerData?.performanceMetrics.breakPointsSavedPercentage || 0 },
    { metric: 'Service Games Won', value: playerData?.performanceMetrics.serviceGamesWonPercentage || 0 },
    { metric: 'Return Points Won', value: playerData?.performanceMetrics.returnPointsWonPercentage || 0 },
    { metric: 'Return Games Won', value: playerData?.performanceMetrics.returnGamesWonPercentage || 0 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.metric}`}</p>
          <p className="intro">{`Value: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="performance-metrics-radar">
      <h3>Performance metrics</h3>
      {selectedPlayer ? (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#e0e0e0" />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fontWeight: 'bold' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Radar name="Player" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.7} />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <p className="no-player-selected">Please select a player to view their performance metrics.</p>
      )}
    </div>
  );
};

export default PerformanceMetricsRadar;