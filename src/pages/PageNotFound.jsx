import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className='flex h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='flex flex-col items-center text-center text-black-12'>
        <p className='text-base font-semibold'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-black-30'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          to='/'
          className='mt-10 flex items-center justify-center py-[6px] px-4 rounded-[40px] bg-black-90 text-sm font-medium cursor-pointer hover:bg-blue-primary text-black-50 hover:text-black-100 transition-all'
        >
          <span>Back to home</span>
        </Link>
      </div>
    </main>
  );
}
