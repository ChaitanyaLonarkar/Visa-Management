import React from "react";
import Form from "../components/Form.jsx";
import VisaType from "../components/VisaType.jsx";

export default function Home() {
  return (
    <>
      <div className=" home h-full flex py-8 px-14 max-[835px]:flex-col max-[835px]:p-4 gap-2 max-[835px]:gap-4 ">
        {/* left side  */}
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
              <div className="w-[50px] bg-slate-600 rounded-full h-[50px] flex items-center justify-center"></div>
              <div className="w-[50px] bg-slate-600 rounded-full h-[50px] flex items-center justify-center"></div>
              <div className="w-[50px] bg-slate-600 rounded-full h-[50px] flex items-center justify-center"></div>
            </div>
            <div className="right flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-slate-700 font-bold">
                  Add Itinerary
                </h2>
                <div>
                  <button className="btn  bg-blue-200 text-slate-800 text-sm rounded-full py-1 px-2 text-center">
                    In Progress
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-slate-700 font-bold">
                  Choose Visa Type
                </h2>
                <div>
                  <button className="btn  bg-slate-200 text-slate-800 text-sm rounded-full py-1 px-2 text-center">
                    Pending
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-slate-700 font-bold">
                  Documents Require
                </h2>
                <div>
                  <button className="btn  bg-slate-200 text-slate-800 text-sm rounded-full py-1 px-2 text-center">
                    Pending
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        
          {/* <Form /> */}
          <VisaType/>
      </div>
    </>
  );
}
