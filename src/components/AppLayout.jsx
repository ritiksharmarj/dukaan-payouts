import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='grid h-screen grid-cols-[260px_minmax(300px,_1fr)] grid-rows-[auto_minmax(300px,_1fr)]'>
      <Header />
      <Sidebar />

      <main className='overflow-y-auto bg-gray-50 p-10'>
        <div className='mx-auto max-w-7xl'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
