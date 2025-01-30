import React from "react";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  let location = useLocation();
  return (
    <div className="flex items-center gap-10 bg-blue-600 text-white pl-5 py-2">
      <FiMenu className="w-8 h-8 cursor-pointer" />
      <h2>
        {location.pathname === "/"
          ? "DASHBOARD"
          : location.pathname === "/addtransaction"
          ? "ADD TRANSACTION"
          : location.pathname.slice(1).toUpperCase()}
      </h2>
    </div>
  );
};

export default Topbar;
