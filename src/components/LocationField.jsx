import React from "react";
import { FaSearchLocation } from 'react-icons/fa';

const cityNameField = {
  borderRadius: "15px",
  borderColor: "#4C4DDB",
  width: "334px",
  height: "42px"
}

function LocationField({ location, setLocation, searchLocation }) {
  return (
      <div className="search">
          <FaSearchLocation style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          <input
              style={cityNameField}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter Location"
              type="text"
          />
      </div>
  );
}

export default LocationField;
