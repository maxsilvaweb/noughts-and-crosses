'use client'

import { useState, useEffect } from 'react'
import Board from '@/components/Board'
import Confetti from 'react-confetti'
import type { GameState, Game, GamesResponse } from './types'

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
  const [games, setGames] = useState<GamesResponse>({ data: [], result_count: 0 });
  const [gameState, setGameState] = useState<GameState>({
    history: [Array(9).fill(null)],
    currentMove: 0,
  })
  const currentSquares = gameState.history[gameState.currentMove]
  const xIsNext = gameState.currentMove % 2 === 0
  const winner = calculateWinner(currentSquares)

  // Function to handle square click
  const handleSquareClick = (index: number) => {
    if (calculateWinner(currentSquares) || currentSquares[index]) {
      return
    }

    const nextSquares = currentSquares.slice()
    nextSquares[index] = xIsNext ? 'X' : 'O'
    handlePlay(nextSquares)
  }

  // Function to update game state
  const handlePlay = async (nextSquares: Array<string | null>) => {
    const nextHistory = [
      ...gameState.history.slice(0, gameState.currentMove + 1),
      nextSquares,
    ]

    setGameState(prevState => ({
      ...prevState,
      history: nextHistory,
      currentMove: nextHistory.length - 1, // Update currentMove
    }));

    const response = await fetch(`/api/games/${games.result_count}`, {
      method: 'PATCH',
      body: JSON.stringify({ history: nextHistory, currentMove: nextHistory.length - 1 }),
    });

     return await response.json();
  };

  // Function to restart the game
  const handleRestartGame = async (gameId: number) => {
    const response = await fetch(`/api/games/${gameId}`, {
      method: 'DELETE',
    });

    return await response.json();
  };

  // Function to fetch game all games
  const getGames = async () => {
    const response = await fetch('/api/games');
    const data = await response.json();
    setGames(data);
  };

  useEffect(() => {
    getGames();
    const currentGame = games.data.find(game => game.id === String(games.result_count))
  
    if (currentGame !== undefined) {
      setGameState(currentGame.state)
    }
  }, []);
  
  // Calculate the current board state
  const showCurrentBoardState = winner
    ? `Winner: ${winner}`
    : currentSquares.every(Boolean)
      ? 'Game is a draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`

  console.log('test', games.data[games.data.length - 1].id)

  return (
    <div className='flex flex-col items-center gap-8'>
      {winner && <Confetti />}
      <ul>
    </ul>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          {showCurrentBoardState}
        </h2>
        <p data-testid='current-move'>Current Move: {gameState.currentMove}</p>
        <Board squares={currentSquares} onSquareClick={handleSquareClick} />
        <button
          data-testid='restart-button'
          className='mt-4 px-4 py-2 bg-green-900 text-white hover:bg-green-700 cursor-pointer transition-colors'
          onClick={() => handleRestartGame()}>Restart Game
        </button>
      </div>
    </div>
  )
}

export default Game
