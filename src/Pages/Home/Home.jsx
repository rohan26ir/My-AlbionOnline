import React from "react";
import WorldMap from "./WorldMap";
import OnlyMap from "./OnlyMap";
import HomeHero from "./HomeHero";
import Newsletter from "./Newsletter";
import HomeCard from "./HomeCard";
import WaveTitles from "../../components/WaveTitles";
import InGames from "./InGames";
import AniNotification from "./AniNotification";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHero></HomeHero>
      </div>

      <div className="">
        <WaveTitles text="Join the Adventure!"></WaveTitles>
        <HomeCard></HomeCard>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-3 px-2 py-5">
        {/* Title Section */}
        <div className="flex items-center justify-center w-full md:w-auto  -ml-10">
          <h2 className="text-2xl font-bold w-full md:w-[250px] text-center rotate-270 block py-2">
            Optimal Resources <br /> by Royal City
          </h2>
        </div>


        {/* Only Map Section */}
        <div className="w-[50%] flex justify-center">
          <OnlyMap />
        </div>

        {/* World Map Section */}
        <div className="w-[60%]">
          {/* <WorldMap /> */}
          <AniNotification></AniNotification>
        </div>

      </div>

      <div>
        <InGames></InGames>
      </div>

      <div className="w-11/12 mx-auto">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
