import React from "react";
import searchbar from "../../assets/images/Search.svg";
import LightIcon from "../svg/LightIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white h-[100px] p-4 ">
      {/* Search Input */}
      <div className="flex items-center bg-[#F6F9F2] rounded-md px-4 py-2 w-[300px]">
        <img src={searchbar} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-600 ml-2 w-full"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        {/* Light/Dark Toggle */}
        <div className="flex items-center space-x-2 bg-[#F6F9F2] rounded-md px-2 py-1">
          <button className="text-sm flex items-center space-x-1 bg-[#D5F29F] text-gray-700 px-2 py-1 rounded-md shadow-sm">
            <LightIcon/>
            <span>Light</span>
          </button>
          <button className="text-sm text-gray-600">Dark</button>
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <div>
              <p className="text-sm font-medium text-gray-700">Benjamin</p>
              <p className="text-xs text-gray-400">New York, USA</p>
            </div>
            <img
              src="https://via.placeholder.com/36"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
