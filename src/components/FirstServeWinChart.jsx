import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts';
import { players } from '../data/playersData';
import './FirstServeWinChart.css';

const FirstServeWinChart = ({ selectedPlayer, onPlayerSelect }) => {
  const data = players.map((player) => ({
    name: player.name,
    firstServePercentage: player.performanceMetrics.firstServePercentage,
    winPercentage: player.performanceMetrics.matchesWonPercentage,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.name}`}</p>
          <p className="intro">{`First Serve: ${payload[0].value}%`}</p>
          <p className="desc">{`Win: ${payload[1].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="first-serve-win-chart">
      <h3>First Serve Vs Win</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 40, right: 40, bottom: 60, left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis
            type="number"
            dataKey="firstServePercentage"
            name="First Serve Percentage"
            unit="%"
            domain={['dataMin - 5', 'dataMax + 5']}
            tick={{ fontSize: 14, fill: '#666666' }}
            tickLine={{ stroke: '#e0e0e0' }}
            axisLine={{ stroke: '#e0e0e0' }}
          >
            <Label value="First Serve Percentage" offset={0} position="bottom" style={{ fontSize: '16px', fill: '#333333' }} />
          </XAxis>
          <YAxis
            type="number"
            dataKey="winPercentage"
            name="Win Percentage"
            unit="%"
            domain={['dataMin - 5', 'dataMax + 5']}
            tick={{ fontSize: 14, fill: '#666666' }}
            tickLine={{ stroke: '#e0e0e0' }}
            axisLine={{ stroke: '#e0e0e0' }}
          >
            <Label value="Win Percentage" angle={-90} position="left" style={{ fontSize: '16px', fill: '#333333' }} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Players" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === selectedPlayer ? '#ff7300' : '#8884d8'}
                stroke={entry.name === selectedPlayer ? '#ff7300' : '#ffffff'}
                strokeWidth={entry.name === selectedPlayer ? 4 : 2}
                r={entry.name === selectedPlayer ? 12 : 8}
                onClick={() => onPlayerSelect(entry.name)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FirstServeWinChart;