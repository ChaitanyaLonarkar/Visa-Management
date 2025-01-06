import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Sidebar() {
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
            <FaRegCircle  className='text-3xl text-sky-500 bg-gray-200 rounded-full '/>
            <FaRegDotCircle className='text-3xl text-sky-500 bg-gray-200 rounded-full ' />
            <FaCheckCircle  className='text-3xl text-green-500 '/>

              {/* <div className="w-[33px] border-4 rounded-full h-[33px] flex items-center justify-center"></div>
              <div className="w-[50px] bg-slate-600 rounded-full h-[50px] flex items-center justify-center"></div>
              <div className="w-[50px] bg-slate-600 rounded-full h-[50px] flex items-center justify-center"></div> */}
            </div>
            <div className="right flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Link className="text-xl text-slate-700 font-bold">
                  Add Itinerary
                </Link>
                <div>
                  <button className="btn  bg-blue-200 text-slate-800 text-xs flex rounded-full py-1 px-4 text-center">
                    In Progress
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-slate-700 font-bold">
                  Choose Visa Type
                </h2>
                <div>
                  <button className="btn border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
                    Pending
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-slate-700 font-bold">
                  Documents Require
                </h2>
                <div>
                  <button className="btn  border-2 border-slate-200 text-slate-600 text-xs rounded-full py-1 px-4 text-center">
                    Pending
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
