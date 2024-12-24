import React from "react";
import document from "../../assets/main-content/document.svg"; 
import user from "../../assets/main-content/user.svg"; 
import sms from "../../assets/main-content/sms.svg"; 

const MainContent = () => {
  return (
    <div className="bg-[#F9FAF5] p-6 min-h-screen">
      <div className="">
        
        <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-700">Open Hiring</h1>
          <p className="text-sm text-gray-500 ">
            Overview of your company's various hirings
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
            Export Report
          </button>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className=" text-green-600 flex items-center justify-center rounded-full">
               <img src={user} alt="" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-700">
                  Total Applied
                </h2>
              </div>
            </div>
            <p className="text-3xl font-semibold text-gray-800">920</p>
            <p className="text-sm text-gray-500">
              Total Applied last year were 780 candidate
            </p>
            <div className="mt-4 text-green-500 text-sm font-medium">
              +2.68%
            </div>
          </div>

          {/* Total Invitation Card */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-700">
                  Total Invitation
                </h2>
              </div>
            </div>
            <p className="text-3xl font-semibold text-gray-800">54</p>
            <p className="text-sm text-gray-500">
              Total invitation last year were 1025 employee
            </p>
            <div className="mt-4 text-yellow-500 text-sm font-medium">
              +4.87%
            </div>
          </div>

          {/* Total Hiring Card */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-700">
                  Total Hiring
                </h2>
              </div>
            </div>
            <p className="text-3xl font-semibold text-gray-800">84</p>
            <p className="text-sm text-gray-500">
              Total hiring year were 72 hiring
            </p>
            <div className="mt-4 text-orange-500 text-sm font-medium">
              +9.12%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
