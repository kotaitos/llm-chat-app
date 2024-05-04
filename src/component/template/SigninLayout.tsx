'use client';

interface LayoutProps {
  children: React.ReactNode;
}

const SigninLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen justify-center items-center dark bg-secondary'>
      {children}
    </div>
  );
};

export default SigninLayout;
