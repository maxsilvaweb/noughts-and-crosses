export type GameState = {
  history: Array<Array<string | null>>;
  currentMove: number;
};

export type Move = {
  id: string;
  gameId: string;
  position: number;
  player: string;
  moveNumber: number;
  createdAt: string;
};

export type Game = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  winner: string | null;
  moves: Move[];
};
