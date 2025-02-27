# Prisma 使用指南

## 简介
Prisma 是一个现代的数据库工具包，它包含：
- ORM (Object-Relational Mapping)
- 数据库迁移工具
- 直观的数据管理界面

## 安装和设置步骤

### 1. 安装 Prisma
```bash
npm i prisma
```

### 2. 初始化 Prisma 与 SQLite
```bash
npx prisma init --datasource-provider sqlite
```
这个命令会：
- 创建 `prisma` 目录
- 生成 `schema.prisma` 文件
- 创建 `.env` 文件（包含数据库连接信息）

### 3. 编写模型 Schema
在 `prisma/schema.prisma` 文件中定义你的数据模型，例如：
```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

### 4. 生成数据库表
根据模型生成数据库表：
```bash
npx prisma migrate dev --name init
```

### 5. 生成 Prisma Client
```bash
npx prisma generate
```
这将生成 TypeScript 类型和 Prisma Client API

## 在 Next.js 中使用

1. 创建数据库连接实例 (`lib/prisma.ts`):
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma
```

2. 在 API 路由中使用：
```typescript
import prisma from '@/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}
```

## 常用命令
- `npx prisma studio` - 启动数据库管理界面
- `npx prisma migrate reset` - 重置数据库
- `npx prisma db push` - 直接推送 Schema 更改到数据库
- `npx prisma format` - 格式化 Schema 文件

## 注意事项
1. 在开发过程中使用 `prisma migrate dev`
2. 在生产环境使用 `prisma migrate deploy`
3. 定期备份数据库
4. 谨慎处理数据库迁移

## 有用的链接
- [Prisma 官方文档](https://www.prisma.io/docs)
- [Next.js with Prisma 指南](https://www.prisma.io/nextjs)
- [Prisma 示例](https://github.com/prisma/prisma-examples)
- [monaco-editor 代码展示及编辑](https://www.npmjs.com/package/@monaco-editor/react)
