import React, { useEffect, useState } from "react";

const WorldMap = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/MapSixCity.json")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching city data:", error));
  }, []);

  return (
    <div className="">
      {cities.map((city) => (
        <div key={city.id} className="my-1">
          <div className="bg-gray-400 px-6 py-2 rounded-lg">
            <h2>{city.city}</h2>
            <p>{city.resource.join(",  ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
