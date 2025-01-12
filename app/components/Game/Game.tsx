'use client'

import { useState } from 'react'
import Board from '@/components/Board'
import { type GameState } from './types'
import Confetti from 'react-confetti'

const calculateWinner = (squares: Array<string | null>): string | null => {
  const boardRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of boardRows) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const Game = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [Array(9).fill(null)],
    currentMove: 0,
  })

  const currentSquares = gameState.history[gameState.currentMove]
  const xIsNext = gameState.currentMove % 2 === 0
  const winner = calculateWinner(currentSquares)

  const handlePlay = (nextSquares: Array<string | null>) => {
    const nextHistory = [
      ...gameState.history.slice(0, gameState.currentMove + 1),
      nextSquares,
    ]
    setGameState({
      history: nextHistory,
      currentMove: nextHistory.length - 1,
    })
  }

  const handleSquareClick = (index: number) => {
    if (calculateWinner(currentSquares) || currentSquares[index]) {
      return
    }

    const nextSquares = currentSquares.slice()
    nextSquares[index] = xIsNext ? 'X' : 'O'
    handlePlay(nextSquares)
  }

  const handleRestartGame = () => {
    setGameState({
      history: [Array(9).fill(null)],
      currentMove: 0,
    })
  }

  const showCurrentBoardState = winner
    ? `Winner: ${winner}`
    : currentSquares.every(Boolean)
      ? 'Game is a draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`

  return (
    <div className='flex flex-col items-center gap-8'>
      {winner && <Confetti />}
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          {showCurrentBoardState}
        </h2>
        <p data-testid='current-move'>Current Move: {gameState.currentMove}</p>
        <Board squares={currentSquares} onSquareClick={handleSquareClick} />
        <button
          data-testid='restart-button'
          className='mt-4 px-4 py-2 bg-green-900 text-white hover:bg-green-700 cursor-pointer transition-colors'
          onClick={handleRestartGame}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default Game
