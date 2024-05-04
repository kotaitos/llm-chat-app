import ChatLayout from '@/component/template/ChatLayout';
import SelectApplicationMenu from '@/component/organism/SelectApplicationMenu';

interface ChatPageProps {
  id: string;
}

export default function ChatPage({ id }: ChatPageProps) {
  return (
    <ChatLayout>
      <main>
        <SelectApplicationMenu />
        Chat ID: {id}
      </main>
    </ChatLayout>
  );
}
