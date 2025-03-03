import { PrismaClient } from "@prisma/client";

// PrismaClient 是针对特定Node.js进程的单例
// 在开发环境下，热重载会使服务器有多个实例
// 为了避免多个连接，我们使用globalThis保存实例

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? 
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;