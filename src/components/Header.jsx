import { Link, useLocation } from 'react-router-dom';
import {
  FeedbackIcon,
  HelpIcon,
  MenuOpenIcon,
  SearchIcon,
  SortArrowIcon,
} from '../assets/icons';
import { useEffect, useState } from 'react';

export default function Header({ setMobileMenuOpen }) {
  const [pageName, setPageName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname.split('/');
    setPageName(pagePath[1] || 'Home');
  }, [location.pathname]);

  return (
    <header className='w-full grid grid-cols-[1fr_auto] tablet:grid-cols-[1fr_minmax(400px,_1fr)_1fr] items-center py-3 px-4 tablet:px-8 gap-4 border-b border-black-85 bg-black-100'>
      <div className='flex items-center gap-2 tablet:gap-4'>
        <div
          className='block tablet:hidden text-black-12'
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuOpenIcon width={24} height={24} />
        </div>
        <span className='text-black-12 text-xl font-medium capitalize'>
          {pageName}
        </span>
        <Link
          to='#'
          className='hidden min-[370px]:flex items-center gap-[6px] text-black-30'
        >
          <HelpIcon width={14} height={14} />
          <span className='text-xs'>How it works</span>
        </Link>
      </div>

      <div className='relative text-black-50 hidden tablet:block'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
          <SearchIcon width={16} height={16} />
        </div>
        <input
          type='text'
          className='block w-[400px] text-[15px] leading-[22px] rounded-md bg-black-95 py-[9px] px-4 pl-10 border-0 outline-none'
          placeholder='Search features, tutorials, etc.'
        />
      </div>

      <div className='flex items-center justify-end'>
        <div className='flex items-center gap-1 tablet:gap-3 text-black-30'>
          <Link
            to='#'
            className='tablet:hidden w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex items-center justify-center bg-black-90 rounded-full'
          >
            <SearchIcon width={20} height={20} />
          </Link>

          <Link
            to='#'
            className='w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex items-center justify-center bg-black-90 rounded-full'
          >
            <FeedbackIcon width={20} height={20} />
          </Link>

          <Link
            to='#'
            className='w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex items-center justify-center bg-black-90 rounded-full'
          >
            <SortArrowIcon width={20} height={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
