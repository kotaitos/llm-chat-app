'use client';

import NavigationBar from '@/component/organism/NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='dark bg-primary p-4' style={{ width: '240px' }}>
        <NavigationBar />
      </div>
      <div className='flex-1 dark bg-secondary p-4'>{children}</div>
    </div>
  );
};

export default ChatLayout;
