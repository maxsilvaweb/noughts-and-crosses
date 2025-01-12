export type BoardProps = {
  squares: Array<string | null>;
  onSquareClick: (index: number) => void;
};

export type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};
