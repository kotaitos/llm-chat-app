'use client';

import { Button } from '@nextui-org/react';
import NewChatIcon from '@/component/atom/icon/NewChatIcon';

export default function NavigationBar() {
  return (
    <div className='flex-1 p-4'>
      <Button className='w-full' endContent={<NewChatIcon />}>
        New Chat
      </Button>
    </div>
  );
}
