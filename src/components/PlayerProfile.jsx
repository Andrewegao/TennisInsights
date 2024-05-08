import React from 'react';
import './PlayerProfile.css';

const PlayerProfile = ({ player }) => {
  const formatCoach = (coach) => {
    if (Array.isArray(coach)) {
      return coach.join(', ');
    }
    return coach;
  };

  return (
    <div className="player-profile">
      <table className="player-details">
        <tbody>
          <tr>
            <td>Age</td>
            <td>{player.profile.age}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{player.profile.country}</td>
          </tr>
          <tr>
            <td>Birthplace</td>
            <td>{player.profile.birthplace}</td>
          </tr>
          <tr>
            <td>Residence</td>
            <td>{player.profile.residence}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{player.profile.height} cm</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{player.profile.weight} kg</td>
          </tr>
          <tr>
            <td>Plays</td>
            <td>{player.profile.plays}</td>
          </tr>
          <tr>
            <td>Backhand</td>
            <td>{player.profile.backhand}</td>
          </tr>
          <tr>
            <td>Favorite Surface</td>
            <td>{player.profile.favoriteSurface}</td>
          </tr>
          <tr>
            <td>Coach</td>
            <td>{formatCoach(player.profile.coach)}</td>
          </tr>
          <tr>
            <td>Turned Pro</td>
            <td>{player.profile.turnedPro}</td>
          </tr>
          <tr>
            <td>Seasons</td>
            <td>{player.profile.seasons}</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>{player.profile.active ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Prize Money</td>
            <td>${player.profile.prizeMoney.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerProfile;