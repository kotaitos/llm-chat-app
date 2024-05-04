import ChatLayout from '@/component/template/ChatLayout';
import SelectApplicationMenu from '@/component/organism/SelectApplicationMenu';

export default function NewChatPage() {
  return (
    <ChatLayout>
      <main>
        <SelectApplicationMenu />
        New Chat
      </main>
    </ChatLayout>
  );
}
