import React from "react";
import Document from "../components/Document";
import Sidebar from "../components/Sidebar.jsx";

export default function Page3() {
  return (
    <>
      <div className=" home h-full flex py-8 px-14 max-[835px]:flex-col max-[835px]:p-4 gap-2 max-[835px]:gap-4 ">
        {/* left side  */}
        <Sidebar />
        {/* right side  */}
        <Document />
      </div>
    </>
  );
}
