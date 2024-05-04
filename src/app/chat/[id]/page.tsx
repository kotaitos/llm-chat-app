'use client';

import ChatPage from '@/component/page/Chat';

export default function Chat({ params }: { params: { id: string } }) {
  const { id } = params;

  return <ChatPage id={id} />;
}
