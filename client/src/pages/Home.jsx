import React from "react";
import Form from "../components/Form.jsx";
import VisaType from "../components/VisaType.jsx";
import Document from "../components/Document.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <div className=" home h-full flex py-8 px-14 max-[835px]:flex-col max-[835px]:p-4 gap-2 max-[835px]:gap-4 ">
        {/* left side  */}
        <Sidebar />
        {/* right side  */}

        {/* <Form /> */}
        {/* <VisaType/> */}
        <Document />
      </div>
    </>
  );
}
