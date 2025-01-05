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
      <div className="right-side w-[75%] bg-white rounded-md p-8 px-12 flex flex-col gap-8">
        <div className="head">
          <h1 className="font-bold text-2xl text-slate-800">Add itinerary</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} className="form flex flex-col gap-8">
            <div className=" form-top bg-white flex rounded w-full flex-wrap gap-8">
              <div className="mb-4 w-[48%] flex flex-col gap-3">
                <label
                  htmlFor="citizen"
                  className="block font-medium text-gray-500"
                >
                  Citizen of
                </label>
                <select
                  id="citizen"
                  name="citizen"
                  value={formData.citizen}
                  onChange={handleChange}
                  className="mt-1 block w-full border-2 border-slate-100 rounded-md shadow-sm py-2 px-5 bg-slate-100  text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 w-[48%] flex flex-col gap-3">
                <label
                  htmlFor="goingTo"
                  className="block  font-medium text-gray-500"
                >
                  Going to
                </label>
                <input
                  type="text"
                  id="goingTo"
                  name="goingTo"
                  value={formData.goingTo}
                  onChange={handleChange}
                  placeholder="Enter here"
                  className="mt-1 block w-full border-2 border-slate-100 rounded-md shadow-sm py-2 px-5 bg-slate-100  text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2"
                />
              </div>

              <div className="mb-4 w-[48%] flex flex-col gap-3">
                <label
                  htmlFor="travelDateStart"
                  className="block  font-medium text-gray-500"
                >
                  Travel date
                </label>
                <input
                  type="date"
                  id="travelDateStart"
                  name="travelDateStart"
                  value={formData.travelDateStart}
                  onChange={handleChange}
                  className="mt-1 block w-full border-2 border-slate-100 rounded-md shadow-sm py-2 px-5 bg-slate-100  text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2"
                />
              </div>

              <div className="mb-6 w-[48%] flex flex-col gap-3 ">
                <label
                  htmlFor="numberOfTravellers"
                  className="block font-medium text-gray-500"
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
                  className="mt-1 block w-full border-2 border-slate-100 rounded-md shadow-sm py-2 px-5 bg-slate-100  text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2"
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
        </div>
      </div>
    </>
  );
};

export default ItineraryForm;
