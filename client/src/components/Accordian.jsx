// 
import React, { useState } from "react";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div
        className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center cursor-pointer rounded-t-md"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">Important Points to Note</h3>
        <span className="text-white transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div className="bg-gray-100 px-6 py-4 border border-t-0 rounded-b-md">
          <ul className="list-disc list-inside text-gray-800">
            <li>
              The processing time will start from the time of submission of the
              application.
            </li>
            <li>
              Visa fee of 90 EUR to be submitted by the applicant at the time of
              biometrics.
            </li>
            <li>Business Days: Monday to Friday.</li>
            <li>Prices are subject to change without notice.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordian();
