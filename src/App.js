import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatProvider from "./context/ChatProvider";
import Home from "./pages/index";

// import VideoApp from "./components/videoCall";

function App() {
  return (
    <>
      <ChatProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </ChatProvider>
      <ToastContainer autoClose={500} />
    </>
  );
}

export default App;
