// client/app/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Check if the environment is development
if (process.env.NODE_ENV === 'development') {
  // In development, use a new instance for hot reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma as PrismaClient; // Type assertion to ensure it's treated as PrismaClient
} else {
  // In production, create a new instance
  prisma = new PrismaClient();
}

export default prisma;