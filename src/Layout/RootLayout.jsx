import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="flex w-screen h-screen bg-gray-200">
        <Navbar />
        <div className="flex-1">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
