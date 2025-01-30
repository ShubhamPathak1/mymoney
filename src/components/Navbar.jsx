import React from "react";
import { NavLink } from "react-router-dom";

// logo
import logo from "../assets/logo.png";

// icons
import { MdDashboard } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex flex-col bg-white pb-6 pl-4 pr-2 gap-8">
      <NavLink to={"/"} className="flex py-4 gap-2 navlink">
        <img src={logo} alt="" className="w-12 " />
        <h2 className="hidden sm:block ">myMoney</h2>
      </NavLink>
      <NavLink to={"/"} className="navlink  flex gap-2 ">
        <MdDashboard className="w-8 h-8" />
        <h4 className="hidden sm:block">DashBoard</h4>
      </NavLink>
      <NavLink to={"/addtransaction"} className="navlink  flex gap-2 ">
        <IoAddCircleSharp className="w-8 h-8" />
        <h4 className="hidden sm:block">Add Transaction</h4>
      </NavLink>
      <NavLink to={"/history"} className="navlink  flex gap-2 ">
        <FaHistory className="w-8 h-8" />
        <h4 className="hidden sm:block">History</h4>
      </NavLink>
      <NavLink to={"/charts"} className="navlink  flex gap-2 ">
        <FaChartSimple className="w-8 h-8" />
        <h4 className="hidden sm:block">Chart</h4>
      </NavLink>
      <NavLink to={"/calendar"} className="navlink  flex gap-2 ">
        <IoCalendarNumber className="w-8 h-8" />
        <h4 className="hidden sm:block">Calendar</h4>
      </NavLink>
    </nav>
  );
};

export default Navbar;
