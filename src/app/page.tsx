import NavigationBar from '@/component/NavigationBar';

export default function Home() {
  return (
    <div className='dark bg-primary flex flex-row min-h-screen'>
      <header className='w-60 h-screen'>
        <NavigationBar />
      </header>

      <main className='dark bg-secondary flex-1 p-24'>
        <h1 className='text-4xl'>Hi there 👋</h1>
      </main>
    </div>
  );
}
