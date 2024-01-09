import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { ChevronDownIcon, MenuCloseIcon, WalletIcon } from '../assets/icons';

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <div className='row-span-full bg-navbar-secondary hidden tablet:flex flex-col items-center py-4 px-[10px] gap-4 text-black-100'>
        <div className='flex flex-col gap-6 items-center w-full grow'>
          {/* company */}
          <div className='flex gap-3 items-center w-[192px]'>
            <div className='w-10 h-10 rounded bg-black-100 overflow-hidden'>
              <img src='/company-icon.jpg' alt='company icon' />
            </div>
            <div className='flex flex-col gap-1 grow items-start'>
              <span className='text-[15px] font-medium leading-[22px]'>
                Nishyan
              </span>
              <Link
                to='#'
                className='text-[13px] leading-4 underline opacity-80 hover:opacity-100 transition-all'
              >
                Visit store
              </Link>
            </div>
            <Link to='#'>
              <ChevronDownIcon width={20} height={20} />
            </Link>
          </div>

          {/* navigation */}
          <Navbar />
        </div>

        <Link
          to='#'
          className='w-[192px] py-[6px] px-3 rounded flex items-center gap-[10px] bg-navbar-200'
        >
          <div className='flex items-center justify-center p-[6px] rounded bg-navbar-100'>
            <WalletIcon />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <span className='text-[13px] leading-4 opacity-80'>
              Available credits
            </span>
            <span className='text-base font-medium leading-6'>222.10</span>
          </div>
        </Link>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className='tablet:hidden fixed h-full w-screen bg-black-30/20 backdrop-blur-sm supports-[backdrop-filter]:bg-black-30/20 z-40 inset-0 overflow-hidden transition-all'>
          <div className='h-full w-[224px] shadow-sm bg-navbar-secondary flex flex-col items-center py-4 px-[10px] gap-4 text-black-100 overflow-y-auto'>
            <div className='flex flex-col gap-6 items-center w-full grow'>
              {/* company */}
              <div className='flex gap-3 items-center w-[192px]'>
                <div className='w-10 h-10 rounded bg-black-100 overflow-hidden'>
                  <img src='/company-icon.jpg' alt='company icon' />
                </div>
                <div className='flex flex-col gap-1 grow items-start'>
                  <span className='text-[15px] font-medium leading-[22px]'>
                    Nishyan
                  </span>
                  <Link
                    to='#'
                    className='text-[13px] leading-4 underline opacity-80 hover:opacity-100 transition-all'
                  >
                    Visit store
                  </Link>
                </div>
                <Link to='#'>
                  <ChevronDownIcon width={20} height={20} />
                </Link>
              </div>

              {/* navigation */}
              <Navbar setMobileMenuOpen={setMobileMenuOpen} />
            </div>

            <Link
              to='#'
              className='w-[192px] py-[6px] px-3 rounded flex items-center gap-[10px] bg-navbar-200'
            >
              <div className='flex items-center justify-center p-[6px] rounded bg-navbar-100'>
                <WalletIcon />
              </div>
              <div className='flex flex-col gap-[2px]'>
                <span className='text-[13px] leading-4 opacity-80'>
                  Available credits
                </span>
                <span className='text-base font-medium leading-6'>222.10</span>
              </div>
            </Link>

            <div
              onClick={() => setMobileMenuOpen(false)}
              className='absolute top-[20px] left-[240px] bg-black-100 text-black-12 rounded-full p-2 z-50 shadow-sm'
            >
              <MenuCloseIcon width={20} height={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
