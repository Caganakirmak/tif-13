import { useState } from 'react';
import { GamePitch } from './components/GamePitch';
import { TeamManager } from './components/TeamManager';
import { TransferMarket } from './components/TransferMarket';
import { MainMenu } from './components/MainMenu';

type GameScreen = 'menu' | 'game' | 'team' | 'transfer';

function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('menu');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'game':
        return <GamePitch />;
      case 'team':
        return <TeamManager />;
      case 'transfer':
        return <TransferMarket />;
      case 'menu':
      default:
        return (
          <MainMenu
            onGameStart={() => setCurrentScreen('game')}
            onTeamManager={() => setCurrentScreen('team')}
            onTransferMarket={() => setCurrentScreen('transfer')}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderScreen()}
      {currentScreen !== 'menu' && (
        <button
          onClick={() => setCurrentScreen('menu')}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          ← Ana Menü
        </button>
      )}
    </div>
  );
}

export default App;
