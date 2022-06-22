import React, { Fragment } from "react";
import FoodTruck from "./foodTruckDetails";

const FoodTrucks = ({ trucks = [] }) => (
  <div className="space-y-4">
    <div className="p-2 m-auto w-fit text-xl font-bold uppercase border-b-2 shadow-slate-400">
      Food corners near you{" "}
    </div>
    {trucks?.length ? (
      <div className="grid grid-cols-3 gap-6">
        {trucks?.map((truck) => {
          return <Fragment key={truck.objectid}><FoodTruck foodTruck={truck} /></Fragment>;
        })}
      </div>
    ) : (
      <p className="pt-4 text-center text-red-600 font-bold text-4xl">
        No Trucks Available
      </p>
    )}
  </div>
);
export default FoodTrucks;
