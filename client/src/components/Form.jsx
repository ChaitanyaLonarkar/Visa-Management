import React, { useState } from "react";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
];

const ItineraryForm = () => {
  const [formData, setFormData] = useState({
    citizen: "India",
    goingTo: "",
    travelDateStart: "",
    travelDateEnd: "",
    numberOfTravellers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div className=" form-top bg-white flex rounded shadow-md w-full flex-wrap gap-1"
        >

        <div className="mb-4 w-[45%]">
          <label htmlFor="citizen" className="block text-sm font-medium text-gray-600">
            Citizen of
          </label>
          <select
            id="citizen"
            name="citizen"
            value={formData.citizen}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 w-[45%]">
          <label htmlFor="goingTo" className="block text-sm font-medium text-gray-600">
            Going to
          </label>
          <input
            type="text"
            id="goingTo"
            name="goingTo"
            value={formData.goingTo}
            onChange={handleChange}
            placeholder="Enter here"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4 flex gap-4 w-[45%]">
          <div className="w-full">
            <label htmlFor="travelDateStart" className="block text-sm font-medium text-gray-600">
              Travel date
            </label>
            <input
              type="date"
              id="travelDateStart"
              name="travelDateStart"
              value={formData.travelDateStart}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
        </div>

        <div className="mb-6 w-[45%]">
          <label
            htmlFor="numberOfTravellers"
            className="block text-sm font-medium text-gray-600"
          >
            No of Travellers
          </label>
          <input
            type="number"
            id="numberOfTravellers"
            name="numberOfTravellers"
            value={formData.numberOfTravellers}
            onChange={handleChange}
            placeholder="Enter here"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </form>
      </>
  );
};

export default ItineraryForm;
