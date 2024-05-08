import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts';
import { players } from '../data/playersData';
import './AceVsDoubleFaultChart.css';

const AceVsDoubleFaultChart = ({ selectedPlayer }) => {
  const data = players.map((player) => ({
    name: player.name,
    acePercentage: player.performanceMetrics.acePercentage,
    doubleFaultPercentage: player.performanceMetrics.doubleFaultPercentage,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.name}`}</p>
          <p className="intro">{`Ace Percentage: ${payload[0].value}%`}</p>
          <p className="desc">{`Double Fault Percentage: ${payload[1].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="ace-vs-double-fault-chart">
      <h3>Ace vs Double Fault Percentage</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 40, right: 40, bottom: 60, left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            type="number"
            dataKey="acePercentage"
            name="Ace Percentage"
            unit="%"
            domain={[0, 'dataMax + 1']}
            tick={{ fontSize: 14, fontWeight: 'bold' }}
            tickLine={{ stroke: '#e0e0e0' }}
            axisLine={{ stroke: '#e0e0e0' }}
          >
            <Label value="Ace Percentage" offset={0} position="bottom" style={{ fontSize: '16px', fontWeight: 'bold' }} />
          </XAxis>
          <YAxis
            type="number"
            dataKey="doubleFaultPercentage"
            name="Double Fault Percentage"
            unit="%"
            domain={[0, 'dataMax + 1']}
            tick={{ fontSize: 14, fontWeight: 'bold' }}
            tickLine={{ stroke: '#e0e0e0' }}
            axisLine={{ stroke: '#e0e0e0' }}
          >
            <Label value="Double Fault Percentage" angle={-90} position="left" style={{ fontSize: '16px', fontWeight: 'bold' }} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Players" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === selectedPlayer ? '#ff7300' : '#8884d8'}
                stroke={entry.name === selectedPlayer ? '#ff7300' : '#8884d8'}
                strokeWidth={entry.name === selectedPlayer ? 4 : 2}
                r={entry.name === selectedPlayer ? 10 : 6}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AceVsDoubleFaultChart;