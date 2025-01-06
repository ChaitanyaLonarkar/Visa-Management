import React from "react";
import { RxExclamationTriangle } from "react-icons/rx";
import { Link } from "react-router-dom";
import Accordian from "./Accordian";
export default function VisaType() {
  return (
    <>
      <div className="right-side w-[75%] bg-white rounded-md p-8 px-12 flex flex-col gap-8">
        <div className="head flex justify-between ">
          <h1 className="font-bold text-2xl text-slate-700">
            Choose Visa Type
          </h1>
          <button className="bg-gray-200 px-5 text-slate-500 rounded font-semibold">
            Back
          </button>
        </div>
        {/* Appoinment Card 1 */}
        <div className="AppoinmentCard rounded-lg bg-gray-200 w-full px-7 py-5">
          <div className="card-head flex justify-between items-center">
            <h2 className="text-lg text-slate-800 font-semibold">
              Schengen Appointment and Documentation b2b
            </h2>
            <button className="bg-blue-500 transition-all hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ">
              Apply &#11106;
            </button>
          </div>
          <div className="body rounded-lg bg-white p-6 mt-5 flex flex-col gap-4">
            <div className="flex gap-2 items-center text-sm text-yellow-700">
              <RxExclamationTriangle className="text-xl" />
              Your visa will not come in time before your departure date. Your
              visa will be delivered on 20th Jan, 2025
            </div>
            <div className="table">
              <table className="table-auto text-left text-sm w-full text-gray-800   ">
                <thead className="w-full bg-gradient-to-r from-gray-300  ">
                  <tr className=" ">
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Entry
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Validity
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Duration
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Documents
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Proccesing Time
                    </th>
                    <th className=" text-lg text-slate-800">
                      &#8377; 12780 /
                      <span className=" font-normal text-base">per pax</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Single</td>
                    <td className="px-4 py-3">180 days</td>
                    <td className="px-4 py-3">90 days</td>
                    <td className="px-4 py-3 text-cyan-600">
                      <Link>View here</Link>
                    </td>
                    <td className="px-4 py-3">15 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Accordian">
              <Accordian />
            </div>
          </div>
        </div>
        {/* Appoinment Card 2 */}
        <div className="AppoinmentCard rounded-lg bg-gray-200 w-full px-7 py-5">
          <div className="card-head flex justify-between items-center">
            <h2 className="text-lg text-slate-800 font-semibold">
              Schengen Appointment and Documentation b2b
            </h2>
            <button className="bg-blue-500 transition-all hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ">
              Apply &#11106;
            </button>
          </div>
          <div className="body rounded-lg bg-white p-6 mt-5 flex flex-col gap-4">
            <div className="flex gap-2 items-center text-sm text-yellow-700">
              <RxExclamationTriangle className="text-xl" />
              Your visa will not come in time before your departure date. Your
              visa will be delivered on 20th Jan, 2025
            </div>
            <div className="table">
              <table className="table-auto text-left text-sm w-full text-gray-800   ">
                <thead className="w-full bg-gradient-to-r from-gray-300  ">
                  <tr className=" ">
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Entry
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Validity
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Duration
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Documents
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Proccesing Time
                    </th>
                    <th className=" text-lg text-slate-800">
                      &#8377; 12780 /
                      <span className=" font-normal text-base">per pax</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Single</td>
                    <td className="px-4 py-3">180 days</td>
                    <td className="px-4 py-3">90 days</td>
                    <td className="px-4 py-3 text-cyan-600">
                      <Link>View here</Link>
                    </td>
                    <td className="px-4 py-3">15 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Accordian">
              <Accordian />
            </div>
          </div>
        </div>
        {/* Appoinment Card 2 */}
        <div className="AppoinmentCard rounded-lg bg-gray-200 w-full px-7 py-5">
          <div className="card-head flex justify-between items-center">
            <h2 className="text-lg text-slate-800 font-semibold">
              Schengen Appointment and Documentation b2b
            </h2>
            <button className="bg-blue-500 transition-all hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ">
              Apply &#11106;
            </button>
          </div>
          <div className="body rounded-lg bg-white p-6 mt-5 flex flex-col gap-4">
            <div className="flex gap-2 items-center text-sm text-yellow-700">
              <RxExclamationTriangle className="text-xl" />
              Your visa will not come in time before your departure date. Your
              visa will be delivered on 20th Jan, 2025
            </div>
            <div className="table">
              <table className="table-auto text-left text-sm w-full text-gray-800   ">
                <thead className="w-full bg-gradient-to-r from-gray-300  ">
                  <tr className=" ">
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Entry
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Validity
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Duration
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Documents
                    </th>
                    <th scope="col" className=" font-semibold px-4 py-3">
                      Proccesing Time
                    </th>
                    <th className=" text-lg text-slate-800">
                      &#8377; 12780 /
                      <span className=" font-normal text-base">per pax</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Single</td>
                    <td className="px-4 py-3">180 days</td>
                    <td className="px-4 py-3">90 days</td>
                    <td className="px-4 py-3 text-cyan-600">
                      <Link>View here</Link>
                    </td>
                    <td className="px-4 py-3">15 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Accordian">
              <Accordian />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
