import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="h-screen flex justify-center items-center ">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
