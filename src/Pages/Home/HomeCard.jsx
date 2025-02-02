import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaGamepad, FaTwitch, FaVideo, FaDiscord } from "react-icons/fa";

const cardsData = [
  {
    title: "🎮 Download & Invite Your Friends to Play Albion Online!",
    description: "Use the referral link below to get exclusive bonuses when your friends sign up and start playing!",
    link: "https://albiononline.com/ref/7N3K5UTRZ7",
    buttonText: "Invite Now!",
    bgColor: "#EEE25C",
    icon: <FaGamepad size={120} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20" />,
  },
  {
    title: "💰 Earn Drops by Watching Albion Online on Twitch!",
    description: "Watch official content creators live on Twitch to earn exclusive rewards. Don't miss out!",
    link: "https://www.twitch.tv/directory/category/albion-online",
    buttonText: "Watch & Earn Drops",
    bgColor: "#BBBCB6",
    icon: <FaTwitch size={120} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20" />,
  },
  {
    title: "🎮 Watch Albion Online on Twitch",
    description: "Join the official Albion Online community on Twitch to watch streamers, events, and more!",
    link: "https://albiononline.com/twitch",
    buttonText: "Watch Now",
    bgColor: "#FCDD67",
    icon: <FaVideo size={120} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20" />,
  },
  {
    title: "💬 Join Albion Online Discord",
    description: "Connect with other players, get updates, and join the Albion Online community on Discord!",
    link: "https://discord.com/invite/albiononline",
    buttonText: "Join Discord",
    bgColor: "#FC9960",
    icon: <FaDiscord size={120} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20" />,
  },
];

const AlbionCards = () => {
  return (
    <div className="p-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, // Show 4 cards per row
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-lg shadow-lg p-6 max-w-sm w-full h-full flex flex-col justify-between min-h-[350px]"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Background Icon (Centered) */}
              {card.icon}

              {/* Content Overlay (Ensures Readability) */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-700 mb-3">{card.description}</p>
              </div>

              {/* Call-to-Action Button */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-center transition-all mt-auto hover:opacity-80 relative z-10"
              >
                {card.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlbionCards;
