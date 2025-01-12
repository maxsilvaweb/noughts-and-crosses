import { type BoardProps } from './types';
import Square from '@/components/Square';

const Board = ({ squares, onSquareClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
