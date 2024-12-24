import searchbar from "../../assets/images/Search.svg";
import LightIcon from "../svg/LightIcon";
import moon from "../../assets/header/Moon.svg";

const Header = () => {
  
  return (
    <header className="flex items-center justify-between bg-white h-[100px] p-4 ">
      {/* Search Input */}
      <div className="flex items-center bg-[#F6F9F2] rounded-md px-4 py-2 lg:w-[533px] lg:h-[48px]">
        <img src={searchbar} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-600 ml-2 w-full h-full"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        {/* Light/Dark Toggle */}
        <div className="flex items-center space-x-2 bg-[#F6F9F2] rounded-md px-2 py-1">
        
          <button className="text-sm flex items-center space-x-1 bg-[#D5F29F] text-gray-700 px-2 py-1 rounded-md shadow-sm">
            <LightIcon />
            <span>Light</span>
          </button>
          <button className="flex gap-1 text-sm text-gray-600">
            <img src={moon} alt="" />
            <span>Dark</span>
          </button>
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative">
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
