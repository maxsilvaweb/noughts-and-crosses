export type GameState = {
  history: Array<Array<string | null>>;
  currentMove: number;
};

export type Move = {
  id: string;
  position: number;
  player: string;
  moveNumber: number;
};

export type Game = {
  id: string;
  player1: string;
  player2: string;
  state: GameState;
  createdAt: string;
  status: string;
  winner: string | null;
  moves: Move[];
};

export type GamesResponse = {
  data: Game[];
  result_count: number;
};