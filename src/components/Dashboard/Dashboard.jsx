import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen max-w-[1440px] mx-auto">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <main className="bg-gray-50 w-[1187px]">
        {/* Header */}
      
        <Header/>
        {/* Content */}
        
      </main>
    </div>
  );
};

export default Dashboard;
