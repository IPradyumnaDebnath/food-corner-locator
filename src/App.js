import React, { useEffect, useState } from "react";

import useDebounce from "hooks/useDebounce";
import { getDistance } from "utils/location";
import Search from "components/searchInput";
import FoodTrucks from "components/foodTrucks";

import "./App.css";

const App = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [foodTrucks, setFoodTrucks] = useState({ persisted: [], current: [] });
  //Debounced location object
  const debouncedLocation = useDebounce(location, 500);
  useEffect(() => {
    //Sort food truck list and show top 5 on change of location data
    if (
      debouncedLocation.latitude === "" &&
      debouncedLocation.longitude === ""
    ) {
      setFoodTrucks((prev) => ({ ...prev, current: prev.persisted }));
    } else {
      const sortedFoodTrucks = foodTrucks.current
        .map((curTruckData) => ({
          ...curTruckData,
          distance: getDistance(location, curTruckData),
        }))
        .sort((cur, nxt) => cur.distance - nxt.distance)
        .slice(0, 5);
      setFoodTrucks((prev) => ({ ...prev, current: sortedFoodTrucks }));
    }
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [debouncedLocation.latitude, debouncedLocation.longitude]);

  useEffect(() => {
    //No Sorting or filter show all
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((resp) => resp.json())
      .then((data) => setFoodTrucks({ persisted: data, current: data }));
  }, []);

  const handleLocationUpdate = (value, type) => {
    //Parse value to only take signed value
    const parsedValue = /^-?\d*\.?\d*$/.test(value) ? value : location[type];
    setLocation({ ...location, [type]: parsedValue });
  };
  return (
    <div className="mt-5 space-y-4">
      <Search location={location} onChange={handleLocationUpdate} />
      <FoodTrucks trucks={foodTrucks.current} />
    </div>
  );
};

export default App;
