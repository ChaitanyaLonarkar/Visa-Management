import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// const obj = {
//   pending: {
//     dot_div: <FaRegCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />,
//     btn_div: <div>
//     <button className="btn border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
//       Pending
//     </button>
//   </div>,
//   },
//   current: {
//     dot_div:<FaRegDotCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />,
//     btn_div: <div>
//     <button className="btn  bg-blue-200 text-slate-800 text-xs flex rounded-full py-1 px-4 text-center">
//       In Progress
//     </button>
//   </div>,
//   },
//   completed: {
//     dot_div:<FaRegDotCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />,
//     btn_div: <div>
//     <button className="btn border-2 b-green-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
//       Completed
//     </button>
//   </div>,
//   },
// };

export default function Sidebar() {
  const location = useLocation();
  // location.pathname === "/visa_type"
  return (
    <>
      <div className="left-side h-[80vh] flex flex-col gap-8 w-[25%]  bg-white rounded-md p-8 ">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-slate-800">
            Are You Applying For
          </h1>
          <p className="text-slate-700 text-lg">Lorem ipsum dolor, sit </p>
        </div>
        <div className="progeress flex gap-2 items-center ">
          <div className="w-full bg-gray-300 rounded-full h-4  ">
            <div
              className="bg-blue-600 h-full rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
          <div className="">30% </div>
        </div>
        <div className="flex gap-4">
          <div className="left flex flex-col gap-4 items-center justify-around">
            {location.pathname === "/" ? (
              <FaRegDotCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            ) : (
              <FaRegCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            )}
            {location.pathname === "/visa_type" ? (
              <FaRegDotCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            ) : (
              <FaRegCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            )}
            {location.pathname === "/document_require" ? (
              <FaRegDotCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            ) : (
              <FaRegCircle className="text-3xl text-sky-500 bg-gray-200 rounded-full " />
            )}
          </div>
          <div className="right flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Link to={"/"} className="text-xl text-slate-700 font-bold">
                Add Itinerary
              </Link>
              <div>
                {location.pathname === "/" ? (
                  <button className="btn border-2 border-blue-200 bg-blue-200 text-slate-800 text-xs flex rounded-full py-1 px-4 text-center">
                    In Progress
                  </button>
                ) : (
                  <button className="btn border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
                    Pending
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to={"/visa_type"}
                className="text-xl text-slate-700 font-bold"
              >
                Choose Visa Type
              </Link>
              <div>
                {location.pathname === "/visa_type" ? (
                  <button className="btn border-2 border-blue-200 bg-blue-200 text-slate-800 text-xs flex rounded-full py-1 px-4 text-center">
                    In Progress
                  </button>
                ) : (
                  <button className="btn border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
                    Pending
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to={"/document_require"}
                className="text-xl text-slate-700 font-bold"
              >
                Documents Require
              </Link>
              <div>
                {location.pathname === "/document_require" ? (
                  <button className="btn btn border-2 border-blue-200 bg-blue-200 text-slate-800 text-xs flex rounded-full py-1 px-4 text-center">
                    In Progress
                  </button>
                ) : (
                  <button className="btn border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
                    Pending
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
