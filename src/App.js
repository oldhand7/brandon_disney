import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/index";
import Terms from "./pages/terms";

// import VideoApp from "./components/videoCall";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about/terms" element={<Terms />} />
      </Routes>
      <ToastContainer autoClose={500} />
    </>
  );
}

export default App;
