import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row  items-center p-4 px-16 bg-white border-2 h-20 text-gray-800">
        <div className="logo w-[25%]  ">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-[10rem]" />
          </Link>
        </div>
        <div className=" flex flex-row justify-between items-center w-[75%]">
          <div className="navigation  flex font-medium gap-6 items-center">
            <Link
              to="/"
              className=" focus:bg-sky-300 rounded text-sky-600 px-2 py-1 "
            >
              Home
            </Link>
            <Link to="/order" className=" hover:text-sky-600 transition-all">
              Order
            </Link>
            <Link
              to="/documents"
              className=" hover:text-sky-600 transition-all"
            >
              Documents
            </Link>
          </div>
          <div className="profile flex gap-4 items-center">
            <div className="text-right">
              <Link to="/profile">
                <p className=" font-semibold">Nomad Holiday</p>
              </Link>
              <p className=" text-sm text-blue-700 font-medium">
                Chaitanya Lonarkar
              </p>
            </div>
            <div className="rounded-full ">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
