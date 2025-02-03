import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdForest, MdOutlineLandslide } from 'react-icons/md';
import { GiDesert, GiSwamp } from 'react-icons/gi';
import { PiMountainsFill } from 'react-icons/pi';

// Ensure correct path to public folder (in Vite, public files are accessed like '/file.ext')
const notificationSound = new Audio('/notification.wav'); 
notificationSound.volume = 0.7; // Set volume level

const datas = [
  {
    id: "1",
    cityicon: <MdOutlineLandslide />,
    cityName: "Martlock",
    time: "15m ago",
    imag1: 'https://render.albiononline.com/v1/item/T4_2H_TOOL_HAMMER',
    imag2: 'https://render.albiononline.com/v1/item/T4_ROCK',
    imag3: 'https://render.albiononline.com/v1/item/T3_ORE',
    imag4: 'https://render.albiononline.com/v1/item/T2_WOOD',
  },
  {
    id: "2",
    cityicon: <MdForest />,
    cityName: "LymHurst",
    time: "7m ago",
    imag1: 'https://render.albiononline.com/v1/item/T4_2H_TOOL_AXE',
    imag2: 'https://render.albiononline.com/v1/item/T4_WOOD',
    imag3: 'https://render.albiononline.com/v1/item/T3_HIDE',
    imag4: 'https://render.albiononline.com/v1/item/T2_ROCK',
  },
  {
    id: "3",
    cityicon: <GiDesert />,
    cityName: "Bridgewatch",
    time: "5m ago",
    imag1: 'https://render.albiononline.com/v1/item/T4_2H_TOOL_KNIFE',
    imag2: 'https://render.albiononline.com/v1/item/T4_HIDE',
    imag3: 'https://render.albiononline.com/v1/item/T3_FIBER',
    imag4: 'https://render.albiononline.com/v1/item/T2_ORE',
  },
  {
    id: "4",
    cityicon: <GiSwamp />,
    cityName: "Thetford",
    time: "1m ago",
    imag1: 'https://render.albiononline.com/v1/item/T4_2H_TOOL_SICKLE',
    imag2: 'https://render.albiononline.com/v1/item/T4_FIBER',
    imag3: 'https://render.albiononline.com/v1/item/T3_WOOD',
    imag4: 'https://render.albiononline.com/v1/item/T2_HIDE',
  },
  {
    id: "5",
    cityicon: <PiMountainsFill />,
    cityName: "Fort Sterling",
    time: "27s ago",
    imag1: 'https://render.albiononline.com/v1/item/T4_2H_TOOL_PICK',
    imag2: 'https://render.albiononline.com/v1/item/T4_ORE',
    imag3: 'https://render.albiononline.com/v1/item/T3_ROCK',
    imag4: 'https://render.albiononline.com/v1/item/T2_FIBER',
  },
];

const AniNotification = () => {
  const [items, setItems] = useState(datas);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems.push(newItems.shift()); // Move the first item to the end
        return newItems;
      });
    }, 2000); // Updates every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to play sound on hover
  const handleHover = () => {
    notificationSound.currentTime = 0; // Reset audio to start
    notificationSound.play().catch(err => console.log("Audio Play Error:", err));
  };

  return (
    <div>
      <div className='h-96 bg-gray-300 shadow-lg mx-24 rounded-2xl flex items-center overflow-hidden'>
        <div className='w-80 mx-auto flex flex-col gap-1 mt-auto pb-4'>
          <AnimatePresence>
            {items.map((data, index) => (
              <motion.div
                key={data.id}
                initial={{ y: 100, opacity: 0 }} // Start below
                animate={{ y: 0, opacity: 1 }} // Move to position
                exit={{ y: -100, opacity: 0 }} // Exit moving up
                transition={{ duration: 0.5, delay: index * 0.2 }} // Smooth delay
                className='bg-white shadow-2xl hover:bg-[#FCDD67] h-16 flex flex-row justify-start rounded-lg p-2 mt-auto cursor-pointer hover:duration-1000 hover:scale-[104%]'
                title='Resources by Royal City'
                onMouseEnter={handleHover} // Play sound when hovered
              >
                <div className="flex items-center justify-center w-8 mr-1.5">
                  <p className='text-3xl text-rose-700'>{data.cityicon}</p>
                </div>
                <div>
                  <div className='flex items-center space-x-1'>
                    <h2 className='font-bold'>{data.cityName}.</h2>
                    <p className='text-sm text-gray-500'>{data.time}</p>
                  </div>
                  <div className='flex flex-row space-x-1'>
                    <img src={data.imag1} className='h-8' alt="" />
                    <img src={data.imag2} className='h-8' alt="" />
                    <img src={data.imag3} className='h-8' alt="" />
                    <img src={data.imag4} className='h-8' alt="" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AniNotification;
