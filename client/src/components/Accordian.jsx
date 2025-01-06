// 
import React, { useState } from "react";

export default function Accordian()  {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mx-auto mt-3">
      <div
        className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center cursor-pointer rounded-lg"
        onClick={toggleAccordion}
      >
        <h3 className=" font-semibold">Important Points to Note</h3>
        <span className="text-white transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div className=" px-8 py-4 ">
          <ul className="list-disc list-inside flex flex-col gap-2 text-gray-800">
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
  )
}



