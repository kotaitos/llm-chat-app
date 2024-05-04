import ChatLayout from '@/component/template/ChatLayout';
import SelectApplicationMenu from '@/component/organism/SelectApplicationMenu';

interface ChatPageProps {
  id: string;
}

export default function ChatPage({ id }: ChatPageProps) {
  return (
    <ChatLayout>
      <main className='dark bg-secondary flex-1 p-4'>
        <SelectApplicationMenu />
        Chat ID: {id}
      </main>
    </ChatLayout>
  );
}
