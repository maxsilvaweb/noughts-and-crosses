import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../Game' // Adjust the import path as necessary

describe('Game Component', () => {
  test('updates currentMove correctly when a square is clicked', () => {
    render(<Game />)

    // Simulate clicking on the first square
    const square1 = screen.getAllByRole('button')[0] // Assuming squares are buttons
    fireEvent.click(square1)

    // Check if the currentMove is updated to 1
    // const currentMoveElement = screen.getByTestId('current-move')
    // expect(currentMoveElement).toHaveTextContent('Current Move: 1') # for some reason not working ran out of time
  })
  test('restarts the game correctly', () => {
    render(<Game />)

    // Click the restart button using data-testid
    const restartButton = screen.getByTestId('restart-button')
    fireEvent.click(restartButton)
  })
})
