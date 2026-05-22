import React from 'react';
import { useGameStore } from '../store/gameStore';
import './TeamManager.css';

export const TeamManager: React.FC = () => {
  const gameState = useGameStore((state) => state.gameState);

  return (
    <div className="team-manager">
      <div className="team-section">
        <h2>Takım Seçimi</h2>
        
        <div className="team-info home-team">
          <h3>{gameState.homeTeam.name}</h3>
          <p>Formasyon: {gameState.homeTeam.formation}</p>
          <div className="players-list">
            <h4>Oyuncular:</h4>
            {gameState.homeTeam.players.slice(0, 5).map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-name">{player.name}</div>
                <div className="player-stats">
                  <span className="position">{player.position}</span>
                  <span className="overall">OVR: {player.overall}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-info away-team">
          <h3>{gameState.awayTeam.name}</h3>
          <p>Formasyon: {gameState.awayTeam.formation}</p>
          <div className="players-list">
            <h4>Oyuncular:</h4>
            {gameState.awayTeam.players.slice(0, 5).map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-name">{player.name}</div>
                <div className="player-stats">
                  <span className="position">{player.position}</span>
                  <span className="overall">OVR: {player.overall}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
