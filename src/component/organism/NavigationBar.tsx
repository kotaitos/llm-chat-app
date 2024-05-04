'use client';

import NewChatButton from '@/component/molecule/NewChatButton';

export default function NavigationBar() {
  return (
    <nav className='flex flex-col w-full h-full'>
      <NewChatButton />
    </nav>
  );
}
