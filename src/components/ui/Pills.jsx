export default function Pills({ text, active }) {
  return (
    <button
      data-state={active ? 'active' : 'inactive'}
      className='flex items-center justify-center py-[6px] px-4 rounded-[40px] bg-black-90 text-sm font-medium cursor-pointer hover:bg-blue-primary data-[state=active]:bg-blue-primary data-[state=active]:text-black-100 text-black-50 hover:text-black-100'
    >
      {text}
    </button>
  );
}
