import React from "react";

function SmallCarCard1({ car }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-bold mb-2">{car.car_name}</h2>
      <p className="mb-1">Price: ${car.price}</p>
      <p className="mb-1">Car ID: {car.car_id}</p>
      {/* Additional Features or Buttons */}
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
        View Details
      </button>
    </div>
  );
}

export default SmallCarCard1;
