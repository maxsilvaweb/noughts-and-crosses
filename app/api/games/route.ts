import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Existing GET handler
export async function GET() {
  try {
    const getGames = await prisma.games.findMany();

    return Response.json({
      data: getGames,
      result_count: getGames.length,
      status: 200
    })
  } catch (error) {
    return Response.json({ error: `Failed to get games: ${error}`, status: 500 });
  }
}

// New POST handler to create a game
// export async function POST(req: Request) {
//   // const { player1, player2 } = await req.json(); // Extract player data from the request body

//   try {
//     const newGame = await prisma.game.create({});

//     return Response.json(newGame, { status: 201 });
//   } catch (error) {
//     return Response.json({ error: `Failed to create a new game: ${error}`, status: 500 });
//   }
// }