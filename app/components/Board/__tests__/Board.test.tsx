import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from '@/components/Board';

describe('Board Component', () => {
  it('renders 9 squares', () => {
    const squares = Array(9).fill(null);
    const { container } = render(
      <Board squares={squares} onSquareClick={() => {}} />
    );
    const squareElements = container.querySelectorAll('.square');
    expect(squareElements.length).toBe(9);
  });
});
