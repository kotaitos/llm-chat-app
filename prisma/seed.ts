import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const userId = uuidv4();
  const threadId = uuidv4();
  const appId = uuidv4();

  // パスワードのハッシュ化
  const saltRounds = 10; // bcryptのソルトのラウンド数
  const plainPassword = 'securepassword123';
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  // ユーザーの作成
  const user = await prisma.user.create({
    data: {
      id: userId,
      name: 'John Doe',
      password: hashedPassword,
      email: 'john.doe@example.com',
      role: 'USER',
    },
  });

  // スレッドの作成
  const thread = await prisma.thread.create({
    data: {
      id: threadId,
      title: 'Welcome Thread',
      creatorId: userId,
    },
  });

  // チャットの作成
  const chat = await prisma.chat.create({
    data: {
      id: uuidv4(),
      threadId: threadId,
      sender: userId,
      content: 'Hello World!',
    },
  });

  // アプリケーションの作成
  const application = await prisma.application.create({
    data: {
      id: appId,
      name: 'Sample App',
      description: 'This is a sample application.',
      vector_store_path: '/path/to/vector',
      userId: userId,
    },
  });

  // アクセストークンの作成
  const accessToken = await prisma.accessToken.create({
    data: {
      token: 'sometoken123456',
      userId: userId,
    },
  });

  console.log({ user, thread, chat, application, accessToken });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
