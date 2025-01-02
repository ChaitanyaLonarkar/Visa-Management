import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4 bg-white border-2 h-20 text-gray-800">
        <div className="logo  border-2 ">
            <img src="/logo.png" alt="logo" className="w-[10rem]"  />
        </div>
        <div className="navigation border-2 ">
             <Link to="/" >Home</Link>
             <Link to="/" >Order</Link>
             <Link to="/" >Documents</Link>
        </div>
        <div className="profile border-2 "></div>
      </div>
    </>
  );
}
