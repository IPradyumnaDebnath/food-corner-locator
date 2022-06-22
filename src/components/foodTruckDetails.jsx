import React from "react";

const FoodTruckDetail = ({ foodTruck }) => {
  return (
    <div className="p-4 space-y-2 cursor-pointer shadow-lg shadow-slate-400 hover:scale-105">
      <div className="items-center text-lg font-bold uppercase">
        <span> {foodTruck?.applicant ?? "-"}</span>
        <span className="text-sm ml-2 ">
          {foodTruck?.approved ? (
            <span className="text-emerald-600">Open</span>
          ) : (
            <span className="text-red-600">Coming soon</span>
          )}
        </span>
      </div>
      <div className="flex space-x-3 font-bold">
        <div className="px-2 bg-gray-300">
          {" "}
          {foodTruck?.facilitytype ?? "-"}
        </div>
        {foodTruck?.distance && (
          <div>
            {foodTruck.distance} <span className="text-xs">KM away</span>
          </div>
        )}
      </div>
      <div className="text-xs">
        <strong>Food Items:</strong> {foodTruck?.fooditems ?? "-"}
      </div>
      <div>
        <strong className="uppercase"> Address:</strong>
        <div> {foodTruck?.address}</div>
        <div className="text-xs italic">
          {foodTruck?.locationdescription ?? "-"}
        </div>
      </div>
    </div>
  );
};

export default FoodTruckDetail;
