import { Button } from '@nextui-org/react';
import NewChatIcon from '@/component/atom/icon/NewChatIcon';

export default function ChatIcon() {
  return (
    <Button className='w-full' endContent={<NewChatIcon />}>
      New Chat
    </Button>
  );
}
