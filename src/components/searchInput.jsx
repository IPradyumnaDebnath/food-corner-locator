import React from "react";

const SearchInput = ({ location, onChange }) => (
  <div className="flex justify-center space-x-4">
    <input
      className="border-b-2 outline-none"
      type="text"
      placeholder="Latitude"
      onChange={(e) => onChange(e?.target?.value, "latitude")}
      value={location?.latitude}
    />
    <input
      className="border-b-2 outline-none"
      type="text"
      placeholder="Longitude"
      onChange={(e) => onChange(e?.target?.value, "longitude")}
      value={location.longitude}
    />
  </div>
);

export default SearchInput;
