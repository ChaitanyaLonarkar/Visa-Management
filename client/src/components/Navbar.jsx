import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isactive, setIsactive] = useState(false);
  const active = useRef();

  const setActive=()=>{
    active.current.classList.add("active");
  }
  return (
    <>
      <div className="flex flex-row max-[835px]:justify-between items-center py-4 max-[835px]:p-4 px-16 bg-white border-2   text-gray-800 max-[835px]:h-14 h-20 ">
        <div className="logo w-[25%]  ">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-[10rem]" />
          </Link>
        </div>
        <div className="desktop-menu max-[835px]:hidden flex flex-row justify-between items-center w-[75%]">
          <div className="navigation   flex font-medium gap-6 items-center">
            <Link
              to="/"
              className=" hover:text-sky-600 transition-all px-2 py-1   "
              ref={active}
              onClick={setActive}
            >
              Home
            </Link>
            <Link to="/order" className=" hover:text-sky-600 transition-all " ref={active}
              onClick={setActive}>
              Order
            </Link>
            <Link
              to="/documents"
              className=" hover:text-sky-600 transition-all "
              ref={active}
              onClick={setActive}
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
        <div className="mobile-menu flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2 scale-90"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div>
              <div className="profile flex gap-2 flex-col-reverse items-center mb-7">
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
              <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between gap-8">
                <Link
                  to="/"
                  className=" hover:text-sky-600 px-2 py-1 "
                >
                  Home
                </Link>
                <Link
                  to="/order"
                  className=" hover:text-sky-600 transition-all"
                >
                  Order
                </Link>
                <Link
                  to="/documents"
                  className=" hover:text-sky-600 transition-all"
                >
                  Documents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
