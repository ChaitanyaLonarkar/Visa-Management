import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
           <Route path="visa_type" element={<Page2 />} /> 
          <Route path="document_require" element={<Page3 />} /> 

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
