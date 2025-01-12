import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Square from '@/components/Square';

describe('Square Component', () => {
  it('renders without crashing', () => {
    render(<Square value="X" onSquareClick={() => {}} />);
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  it('calls onSquareClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Square value="X" onSquareClick={handleClick} />);
    fireEvent.click(screen.getByText('X'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('displays the correct color for X', () => {
    render(<Square value="X" onSquareClick={() => {}} />);
    expect(screen.getByText('X')).toHaveClass(
      'square w-24 h-24 border border-gray-300 flex items-center justify-center text-2xl font-bold text-green-800 bg-green-400'
    );
  });

  it('displays the correct color for O', () => {
    render(<Square value="O" onSquareClick={() => {}} />);
    expect(screen.getByText('O')).toHaveClass(
      'square w-24 h-24 border border-gray-300 flex items-center justify-center text-2xl font-bold text-red-800 bg-red-400'
    );
  });
});
