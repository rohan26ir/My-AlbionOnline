import React from 'react';
import WorldMap from './WorldMap';
import OnlyMap from './OnlyMap';

const Home = () => {
  return (
    <div>
      


    <div className=' flex flex-col md:flex-row justify-between gap-3  px-2 py-5'>
      <div className='w-[60%]'>
        <WorldMap></WorldMap>
      </div>
      <div className='w-[40%]  flex justify-center'>
        <OnlyMap></OnlyMap>
      </div>
    </div>


    </div>
  );
};

export default Home;