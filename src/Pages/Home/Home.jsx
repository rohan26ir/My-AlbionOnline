import React from 'react';
import WorldMap from './WorldMap';
import OnlyMap from './OnlyMap';
import HomeHero from './HomeHero';

const Home = () => {
  return (
    <div>

      <div>
        <HomeHero></HomeHero>
      </div>
      


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