// SurfaceWinPercentage.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { players } from '../data/playersData';
import './SurfaceWinPercentage.css';

const SurfaceWinPercentage = ({ selectedPlayer }) => {
  const playerData = players.find((player) => player.name === selectedPlayer);

  const data = [
    { name: 'Hard', value: playerData?.tournamentPerformance.hard || 0 },
    { name: 'Clay', value: playerData?.tournamentPerformance.clay || 0 },
    { name: 'Grass', value: playerData?.tournamentPerformance.grass || 0 },
    { name: 'Carpet', value: playerData?.tournamentPerformance.carpet || 0 },
  ];

  const surfaceColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro">{`Win Percentage: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="surface-win-percentage">
      <h3>Surface-wise Win Percentage</h3>
      {selectedPlayer ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 14, fontWeight: 'bold' }} />
            <YAxis tick={{ fontSize: 14 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend align="right" verticalAlign="top" iconSize={20} iconType="circle" />
            <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={surfaceColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="no-player-selected">Please select a player to view their surface-wise win percentage.</p>
      )}
    </div>
  );
};

export default SurfaceWinPercentage;