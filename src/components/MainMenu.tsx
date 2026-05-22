import React from 'react';
import './MainMenu.css';

interface MainMenuProps {
  onGameStart: () => void;
  onTeamManager: () => void;
  onTransferMarket: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  onGameStart,
  onTeamManager,
  onTransferMarket,
}) => {
  return (
    <div className="main-menu">
      <div className="menu-container">
        <div className="logo">
          <h1>⚽ TIF-13</h1>
          <p>Football Manager & Game</p>
        </div>

        <div className="menu-buttons">
          <button className="menu-btn primary" onClick={onGameStart}>
            🎮 Maç Oyna
          </button>
          <button className="menu-btn secondary" onClick={onTeamManager}>
            👥 Takım Yönetimi
          </button>
          <button className="menu-btn secondary" onClick={onTransferMarket}>
            💰 Transfer Pazarı
          </button>
        </div>
      </div>
    </div>
  );
};
