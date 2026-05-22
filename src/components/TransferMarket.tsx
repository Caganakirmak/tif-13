import React, { useState } from 'react';
import { TransferPlayer } from '../types/game';
import './TransferMarket.css';

const mockTransferPlayers: TransferPlayer[] = [
  {
    id: '10',
    name: 'Kylian Mbappé',
    position: 'ST',
    overall: 95,
    pace: 97,
    shooting: 96,
    passing: 87,
    dribbling: 95,
    defense: 36,
    physical: 77,
    club: 'Paris Saint-Germain',
    price: 180000000,
    x: 0,
    y: 0,
    z: 0,
  },
  {
    id: '11',
    name: 'Erling Haaland',
    position: 'ST',
    overall: 94,
    pace: 96,
    shooting: 97,
    passing: 80,
    dribbling: 89,
    defense: 45,
    physical: 94,
    club: 'Manchester City',
    price: 175000000,
    x: 0,
    y: 0,
    z: 0,
  },
];

export const TransferMarket: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<TransferPlayer | null>(null);

  return (
    <div className="transfer-market">
      <h2>Transfer Pazarı</h2>
      <div className="players-grid">
        {mockTransferPlayers.map((player) => (
          <div
            key={player.id}
            className="player-transfer-card"
            onClick={() => setSelectedPlayer(player)}
          >
            <div className="card-header">
              <h4>{player.name}</h4>
              <span className="position-badge">{player.position}</span>
            </div>
            <div className="card-body">
              <p>Kulüp: {player.club}</p>
              <p className="price">₺{(player.price / 1000000).toFixed(0)}M</p>
              <div className="rating">
                <span className="overall-badge">OVR: {player.overall}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPlayer && (
        <div className="player-details-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedPlayer(null)}>×</button>
            <h3>{selectedPlayer.name}</h3>
            <div className="stats-grid">
              <div className="stat">Pace: {selectedPlayer.pace}</div>
              <div className="stat">Shooting: {selectedPlayer.shooting}</div>
              <div className="stat">Passing: {selectedPlayer.passing}</div>
              <div className="stat">Dribbling: {selectedPlayer.dribbling}</div>
              <div className="stat">Defense: {selectedPlayer.defense}</div>
              <div className="stat">Physical: {selectedPlayer.physical}</div>
            </div>
            <button className="buy-btn">Satın Al - ₺{(selectedPlayer.price / 1000000).toFixed(0)}M</button>
          </div>
        </div>
      )}
    </div>
  );
};
