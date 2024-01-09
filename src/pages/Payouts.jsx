import {
  ChevronDownIcon,
  DownloadIcon,
  SearchIcon,
  SortIcon,
} from '../assets/icons';
import RefundList from '../components/RefundList';
import Card from '../components/ui/Card';
import Pills from '../components/ui/Pills';

export default function Payouts() {
  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <span className='text-black-12 text-xl font-medium'>Overview</span>

        <div className='relative text-black-30'>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
            <ChevronDownIcon width={16} height={16} />
          </div>
          <select
            defaultValue='this-month'
            className='appearance-none h-9 rounded border border-black-85 bg-black-100 text-black-30 text-base cursor-pointer py-[6px] px-[14px] pr-9 outline-none'
          >
            <option value='this-week'>This Week</option>
            <option value='this-month'>This Month</option>
            <option value='this-year'>This Year</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-5 items-start'>
        <Card
          title='Next Payout'
          price='₹2,312.23'
          orderNumber='23'
          nextPayDate='Today, 04:00PM'
        />
        <Card title='Amount Pending' price='₹92,312.20' orderNumber='13' />
        <Card title='Amount Processed' price='₹23,92,312.19' />
      </div>

      <div className='mt-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-6'>
          <span className='text-black-12 text-xl font-medium'>
            Transactions | This Month
          </span>
          <div className='flex items-center gap-3'>
            <Pills text='Payouts (22)' active={false} />
            <Pills text='Refunds (6)' active={true} />
          </div>
        </div>

        <div className='flex flex-col gap-3 p-3 pb-2 rounded-lg bg-black-100 shadow-sm'>
          <div className='flex items-center justify-between'>
            <div className='relative text-black-60'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                <SearchIcon width={14} height={14} />
              </div>
              <input
                type='text'
                className='block w-[248px] text-sm rounded bg-black-100 py-[10px] px-4 pl-[38px] border border-black-85 outline-none'
                placeholder='Order ID or transaction ID'
              />
            </div>

            <div className='flex items-center gap-4 relative'>
              <div className='flex items-center gap-[6px] rounded border border-black-85 bg-black-100 py-[6px] px-3 text-black-30 cursor-pointer'>
                <span>Sort</span>
                <SortIcon width={16} height={16} />
              </div>

              <div className='w-9 h-9 border border-black-85 rounded flex items-center justify-center cursor-pointer text-black-30'>
                <DownloadIcon width={20} height={20} />
              </div>
            </div>
          </div>

          <RefundList />
        </div>
      </div>
    </>
  );
}
