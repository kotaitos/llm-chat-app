'use client';

import { Button } from '@nextui-org/react';
import React from 'react';
import ChatIcon from './icon/Chat';

const NavigationBar: React.FC = () => {
  return (
    <div className='flex-1 p-4'>
      <Button className='w-full' endContent={<ChatIcon />}>
        New Chat
      </Button>
    </div>
  );
};

export default NavigationBar;
