import ChatLayout from '@/component/template/ChatLayout';
import SelectApplicationMenu from '@/component/organism/SelectApplicationMenu';

export default function NewChatPage() {
  return (
    <ChatLayout>
      <main className='dark bg-secondary flex-1 p-4'>
        <SelectApplicationMenu />
        New Chat
      </main>
    </ChatLayout>
  );
}
