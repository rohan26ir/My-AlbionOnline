import React from 'react';
import royelCity from "../../assets/royel-city.webp"

const OnlyMap = () => {
  return (
    <div>
      <div className='h-96 '>
        <img 
        src={royelCity} 
        alt="" 
        className='h-96 rounded-full '
        />
      </div>
    </div>
  ); 
};

export default OnlyMap;