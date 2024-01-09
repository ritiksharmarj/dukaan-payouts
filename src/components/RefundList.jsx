import { refunds } from '../data/data-refunds';

export default function RefundList() {
  return (
    <div className='relative overflow-x-auto'>
      <table className='min-w-full text-sm text-left text-black-30'>
        <thead>
          <tr>
            <th
              scope='col'
              className='py-[10px] px-3 font-medium bg-black-95 rounded-l'
            >
              Order ID
            </th>
            <th scope='col' className='py-[10px] px-3 font-medium bg-black-95'>
              Status
            </th>
            <th scope='col' className='py-[10px] px-3 font-medium bg-black-95'>
              Transaction ID
            </th>
            <th scope='col' className='py-[10px] px-3 font-medium bg-black-95'>
              Refund date
            </th>
            <th
              scope='col'
              className='py-[10px] px-3 font-medium text-right bg-black-95 rounded-r'
            >
              Order amount
            </th>
          </tr>
        </thead>

        <tbody className='divide-y divide-black-90'>
          {refunds.map((refund) => (
            <tr key={refund.orderId} className=''>
              <td className='whitespace-nowrap py-[14px] px-3 text-blue-primary font-medium'>
                #{refund.orderId}
              </td>
              <td className='whitespace-nowrap py-[14px] px-3 flex items-center gap-[6px] capitalize text-black-12'>
                <div
                  data-state={
                    refund.status === 'successful' ? 'successful' : 'processing'
                  }
                  className='w-[10px] h-[10px] rounded-full data-[state=successful]:bg-green-secondary bg-black-60'
                ></div>
                <span>{refund.status}</span>
              </td>
              <td className='whitespace-nowrap py-[14px] px-3'>
                {refund.transactionID}
              </td>
              <td className='whitespace-nowrap py-[14px] px-3'>
                {refund.refundDate}
              </td>
              <td className='whitespace-nowrap py-[14px] px-3 text-right'>
                {refund.orderAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
