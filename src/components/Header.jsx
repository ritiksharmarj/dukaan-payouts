import { Link } from 'react-router-dom';
import { HelpIcon, SearchIcon } from '../assets/icons';

export default function Header() {
  return (
    <header className='grid grid-cols-[1fr_minmax(400px,_1fr)_1fr] items-center py-3 px-8 gap-4 border-b border-black-85 bg-black-100'>
      <div className='flex items-center gap-4'>
        <span className='text-black-12 text-xl font-medium'>Payouts</span>
        <Link to='#' className='flex items-center gap-[6px] text-black-30'>
          <HelpIcon width={14} height={14} />
          <span className='text-xs'>How it works</span>
        </Link>
      </div>

      <div className='relative text-black-50'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
          <SearchIcon width={16} height={16} />
        </div>
        <input
          type='text'
          className='block w-[400px] text-[15px] leading-[22px] rounded-md bg-black-95 py-[9px] px-4 pl-10 border-0 outline-none'
          placeholder='Search features, tutorials, etc.'
        />
      </div>

      <div></div>
    </header>
  );
}
