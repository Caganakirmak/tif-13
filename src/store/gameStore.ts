import { create } from 'zustand';
import { GameState, Team, Player } from '../types/game';

// Mock data
const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Cristiano Ronaldo',
    position: 'ST',
    overall: 93,
    pace: 89,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defense: 35,
    physical: 79,
    x: 0,
    y: 0,
    z: 0,
  },
  {
    id: '2',
    name: 'Lionel Messi',
    position: 'RW',
    overall: 93,
    pace: 85,
    shooting: 94,
    passing: 91,
    dribbling: 96,
    defense: 38,
    physical: 73,
    x: 5,
    y: 0,
    z: 0,
  },
  {
    id: '3',
    name: 'Manuel Neuer',
    position: 'GK',
    overall: 89,
    pace: 58,
    shooting: 16,
    passing: 80,
    dribbling: 46,
    defense: 89,
    physical: 83,
    x: -50,
    y: 0,
    z: 0,
  },
];

const mockHomeTeam: Team = {
  id: 'home',
  name: 'FC Galatasaray',
  logo: 'https://via.placeholder.com/100',
  players: mockPlayers,
  formation: '4-3-3',
};

const mockAwayTeam: Team = {
  id: 'away',
  name: 'Fenerbahçe SK',
  logo: 'https://via.placeholder.com/100',
  players: mockPlayers,
  formation: '4-2-3-1',
};

interface GameStore {
  gameState: GameState;
  setGameState: (state: Partial<GameState>) => void;
  togglePause: () => void;
  updateScore: (team: 'home' | 'away') => void;
  updateGameTime: (time: number) => void;
  changePossession: (team: 'home' | 'away') => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: {
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
    currentPossession: 'home',
    score: { home: 0, away: 0 },
    gameTime: 0,
    isPaused: false,
  },
  setGameState: (newState) =>
    set((state) => ({
      gameState: { ...state.gameState, ...newState },
    })),
  togglePause: () =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        isPaused: !state.gameState.isPaused,
      },
    })),
  updateScore: (team) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        score: {
          ...state.gameState.score,
          [team]: state.gameState.score[team] + 1,
        },
      },
    })),
  updateGameTime: (time) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        gameTime: time,
      },
    })),
  changePossession: (team) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        currentPossession: team,
      },
    })),
}));
