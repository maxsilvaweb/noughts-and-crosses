import React from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  const textColor =
    value === 'X'
      ? 'text-green-800'
      : value === 'O'
      ? 'text-red-800'
      : 'text-black';

  const bgColor =
    value === 'X' ? 'bg-green-400' : value === 'O' ? 'bg-red-400' : 'bg-black';

  return (
    <button
      className={`square w-24 h-24 border border-gray-300 flex items-center justify-center text-2xl font-bold ${textColor} ${bgColor}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
