import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST handler to update game state
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const newGameState = await req.json();

  try {
    const updatedGameState = await prisma.games.update({
      where: { id: Number(id) },
      data: {
        state: newGameState,
      },
  });

    return NextResponse.json(updatedGameState, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Failed to update game state: ${error}` }, { status: 500 });
  }
}

// DELETE handler to clear a row by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const restartGame = await prisma.games.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(restartGame, { status: 200 }); // Return the deleted game data
  } catch (error) {
    return NextResponse.json({ error: `Failed to restart game: ${error}` }, { status: 500 });
  }
}
