import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-[253px] min-h-screen shadow-md p-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-800">HUREN</h1>
            <p className="text-sm text-gray-500">Human Resource</p>
          </div>
        </div>

        {/* Menu */}
        <nav>
          <p className="text-sm text-gray-500 uppercase mb-4">Menu</p>
          <ul className="space-y-4">
            {/* Menu Item */}
            <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="p-2 rounded-md bg-[#F6F9F2] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </span>
              <span>Home</span>
            </li>

            {/* Team */}
            <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="p-2 rounded-md bg-[#F6F9F2] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 14l-4-4-4 4m4-10v12"
                  />
                </svg>
              </span>
              <span>Team</span>
            </li>

            {/* Highlighted Menu Item */}
            <li className="flex items-center space-x-3 bg-[#D5F29F] text-gray-800 font-medium rounded-md px-3 py-2 shadow-md cursor-pointer">
              <span className="p-2 rounded-md bg-[#00000010]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Hire & Onboard</span>
            </li>

            {/* Dropdown Items */}
            <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="p-2 rounded-md bg-[#F6F9F2] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </span>
              <span>Payroll</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="p-2 rounded-md bg-[#F6F9F2] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              <span>Time Tracking</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Profile */}
      <div className="bg-[#F6F9F2] rounded-lg p-4 flex items-center space-x-3 shadow-sm">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Ariyan Rooben</p>
          <p className="text-xs text-gray-500">Web Designer</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
