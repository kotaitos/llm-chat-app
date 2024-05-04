'use client';

import NavigationBar from '@/component/organism/NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <header className='dark bg-primary w-1/6'>
        <NavigationBar />
      </header>
      {children}
    </div>
  );
};

export default ChatLayout;
