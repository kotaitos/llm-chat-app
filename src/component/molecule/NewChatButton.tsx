import { Button } from '@nextui-org/react';
import NewChatIcon from '@/component/atom/icon/NewChatIcon';

export default function NewChatButton() {
  return (
    <Button className='w-full' color='primary' endContent={<NewChatIcon />}>
      New Chat
    </Button>
  );
}
