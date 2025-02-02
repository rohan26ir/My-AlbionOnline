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
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-base-300 bg-base-200 border"
          >
            <div className="collapse-title text-xl  font-medium">
              {city.city}
            </div>
            <div className="collapse-content">
              <p className="space-x-5">
                {city.resource.join(", ")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
