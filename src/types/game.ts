// Game types ve interfaces
export interface Player {
  id: string;
  name: string;
  position: 'GK' | 'CB' | 'LB' | 'RB' | 'CM' | 'LM' | 'RM' | 'ST' | 'LW' | 'RW';
  overall: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defense: number;
  physical: number;
  x: number;
  y: number;
  z: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  players: Player[];
  formation: string;
}

export interface GameState {
  homeTeam: Team;
  awayTeam: Team;
  currentPossession: 'home' | 'away';
  score: {
    home: number;
    away: number;
  };
  gameTime: number;
  isPaused: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
}

export interface TransferPlayer extends Player {
  club: string;
  price: number;
}
