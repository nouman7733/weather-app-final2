import React from "react";


// const cityName = {
//   textAlign: "center",
//   fontSize: "1.5rem",
//   fontWeight: "bold",
//   color: "#333",
// }

const cityName = {
  textAlign: "center",
  fontSize: "2rem", // Increased font size
  fontWeight: "bold",
  color: "#4C4DDB", // Updated color
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Added text shadow
};

// function CityDateDisplay({ data }) {
//   // Convert the current date to a more readable format
//   const date = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="container">
//       <div className="location">
//         <p style={cityName}>{data.name}</p> {/* Display city name */}
//         <p>{date}</p> {/* Display formatted date */}
//       </div>
//     </div>
//   );
// }

function CityDateDisplay({ data }) {
  const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
  });

  return (
      <div className="container">
          <div className="location">
              <h1 style={cityName}>{data.name}</h1> {/* Use h1 for city name */}
              <p>{date}</p> {/* Display formatted date */}
          </div>
      </div>
  );
}

export default CityDateDisplay;
