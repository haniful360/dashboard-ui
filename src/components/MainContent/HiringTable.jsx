import React from 'react';
import flag1 from "../../assets/main-content/flag/australia.svg";
import flag2 from "../../assets/main-content/flag/lebanon.svg";
import flag3 from "../../assets/main-content/flag/croatia.svg";
import flag4 from "../../assets/main-content/flag/uk.svg";
import flag5 from "../../assets/main-content/flag/iceland.svg";
import flag6 from "../../assets/main-content/flag/india.svg";

const HiringTable = () => {
  return (
    <div className="p-6 mt-6 rounded-md bg-white ">
      <div className="">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex flex-wrap space-x-4 bg-[#F9FAF5] h-[48px] py-1 rounded-lg px-3">
            <button className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-[#393C43]">
              All hires <span className="bg-[#FCCE44] text-[10px] px-1  py-0.5 rounded ml-1">60</span>
            </button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">Employees <span className="bg-white px-1 py-0.5 rounded">10</span></button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">Global Payroll  <span className="bg-white px-1 py-0.5 rounded">10</span></button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">Contractors  <span className="bg-white px-1 py-0.5 rounded">20</span></button>
            <button className="text-[#393C43] text-[14px] px-3 py-1.5 rounded-full text-sm font-medium">Direct Employees  <span className="bg-white px-1 py-0.5 rounded">20</span></button>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 text-sm">+ Add New</button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 text-sm">
              <i className="fas fa-filter"></i> Filters
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-sm ">
          <table className="w-full text-left text-gray-700">
            <thead className="text-sm capitalize text-[#393C43] border rounded-lg">
              <tr>
                <th className="py-3 px-4">
                  <input type="checkbox" className="form-checkbox" />
                </th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Employment ID</th>
                <th className="py-3 px-4">Type of hire</th>
                <th className="py-3 px-4">Country</th>
                <th className="py-3 px-4">License use</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'Luhutan Imin', id: 'L8RQSC', type: 'Employee', icon:flag1, country: 'Australia', license: '1/5', status: 'Draft', color: 'pink' },
                { name: 'Robert Fox', id: 'N9KMON', type: 'Global Payroll', icon:flag6, country: 'India', license: '4/5', status: 'New Hire', color: 'purple' },
                { name: 'Eleanor Pena', id: 'K8LOVN', type: 'Contractor', icon:flag5, country: 'Iceland', license: '4/5', status: 'New Hire', color: 'blue' },
                { name: 'Leslie Alexander', id: 'K8LOVN', type: 'Employee', icon:flag2, country: 'Lebanon', license: '3/5', status: 'Draft', color: 'orange' },
                { name: 'Devon Lane', id: 'DH5FXE', type: 'Employee',icon:flag4, country: 'United Kingdom', license: '4/5', status: 'New Hire', color: 'blue' },
                { name: 'Jenny Wilson', id: 'AKXS6T', type: 'Contractor',icon:flag3, country: 'Croatia', license: '3/5', status: 'Draft', color: 'orange' },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }
                >
                  <td className="py-3 px-4">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="py-3 px-4 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/150?img=${index}`}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>{row.name}</span>
                  </td>
                  <td className="py-3 px-4">{row.id}</td>
                  <td className="py-3 px-4">{row.type}</td>
                 
                  <td className="py-3 px-4 flex gap-2"><img src={row.icon} alt="" />{row.country}</td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-${row.color}-500`}
                        style={{ width: `${(parseInt(row.license[0]) / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">{row.license}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={
                        row.status === 'New Hire'
                          ? 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs'
                          : 'bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs'
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HiringTable;
