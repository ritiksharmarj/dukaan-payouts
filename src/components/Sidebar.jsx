import { Link } from 'react-router-dom';
import { ChevronDown } from '../assets/icons/ChevronDown';
import Navbar from './Navbar';
import { WalletIcon } from '../assets/icons/WalletIcon';

export default function Sidebar() {
  return (
    <div className='row-span-full bg-navbar-secondary flex flex-col items-center py-4 px-[10px] gap-4 text-black-100'>
      <div className='flex flex-col gap-6 items-center w-full grow'>
        {/* company */}
        <div className='flex gap-3 items-center w-[192px]'>
          <div className='w-10 h-10 rounded bg-black-100 overflow-hidden'>
            <img src='/company-icon.jpg' alt='company icon' />
          </div>
          <div className='flex flex-col gap-1 grow'>
            <span className='text-[15px] font-medium leading-[22px]'>
              Nishyan
            </span>
            <Link
              to='#'
              className='text-[13px] leading-4 underline opacity-80 hover:opacity-100'
            >
              Visit store
            </Link>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>

        {/* navigation */}
        <Navbar />
      </div>

      <div className='w-[192px] py-[6px] px-3 rounded flex items-center gap-[10px] bg-navbar-200'>
        <div className='flex items-center justify-center p-[6px] rounded bg-navbar-100'>
          <WalletIcon />
        </div>
        <div className='flex flex-col gap-[2px]'>
          <span className='text-[13px] leading-4 opacity-80'>
            Available credits
          </span>
          <span className='text-base font-medium leading-6'>222.10</span>
        </div>
      </div>
    </div>
  );
}
