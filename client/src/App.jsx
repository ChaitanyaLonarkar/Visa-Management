import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="order" element={<Blogs />} /> */}
          {/* <Route path="documents" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
