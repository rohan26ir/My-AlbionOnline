import React from 'react';

const InGames = () => {
  return (
    <div>
      <div className='bg-[#22242C] h-36'>

        <div className='flex flex-row justify-around  py-4'>

        <div className='flex flex-col place-items-start'>
            <h2 className='text-7xl font-bold text-gray-200'>36<span className='text-xs' title='Day'>D</span></h2>
            <p className='text-3xl font-bold text-gray-400'>Played</p>
          </div>

          <div className='flex flex-col justify-between my-3'>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          </div>

          <div className='flex flex-col place-items-start'>
            <h2 className='text-7xl font-bold text-gray-200'>1.4<span className='text-xs' title='BiLione'>B</span></h2>
            <p className='text-3xl font-bold text-gray-400 ml-2'>Sell</p>
          </div>

          <div className='flex flex-col justify-between my-3'>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          <div className='w-2 h-2 bg-orange-300 '></div>
          </div>

          <div className='flex flex-col place-items-start'>
            <h2 className='text-7xl font-bold text-gray-200'>705<span className='text-xs' title='Milione'>M</span></h2>
            <p className='text-3xl font-bold text-gray-400'>Profit</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InGames;