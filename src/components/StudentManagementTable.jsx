import React, { useState } from "react";
import { Search, Plus, Eye, Pencil, Trash2 } from "lucide-react";
import noData from '../assets/noData.svg'
import AddStudentCanvas from "./AddStudentCanvas";
const StudentManagementTable = () => {
  const [search, setSearch] = useState("");
    const [isModal, setIsModal] = useState(false)
  // Dummy Data
  const students = [
    {
      id: "101010231331",
      name: "Surya Chandran",
      year: "First Year",
      department: "Quantum pulse",
      email: "abc@gmail.com",
      phone: "102342323232",
    },
    {
      id: "101010231332",
      name: "Surya Chandran",
      year: "Second Year",
      department: "Quantum pulse",
      email: "abc@gmail.com",
      phone: "102342323232",
    },
    {
      id: "101010231333",
      name: "Surya Chandran",
      year: "Third Year",
      department: "Quantum pulse",
      email: "abc@gmail.com",
      phone: "102342323232",
    },
    {
      id: "101010231334",
      name: "Surya Chandran",
      year: "First Year",
      department: "Quantum pulse",
      email: "abc@gmail.com",
      phone: "102342323232",
    },
    {
      id: "101010231335",
      name: "Surya Chandran",
      year: "Second Year",
      department: "Quantum pulse",
      email: "abc@gmail.com",
      phone: "102342323232",
    },
  ];

  // Filter Logic
  const filteredData = students.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    );
  });

  

// functions 
  function onClose(){
    setIsModal(false)
  }
  return (
    <div className="bg-white px-6 mt-3 pb-4 rounded-xl shadow-sm  border border-gray-300 mx-6 h-[calc(100vh-300px)]">
      {/* Header */}
      <div className="flex justify-between mt-3 items-center mb-4">
        <h2 className="text-lg font-medium text-[#282526]">Student Details</h2>

        <div className="flex gap-3 items-center">
            {/* Search Box */}
        <div className="flex items-center w-72 px-3 py-2 rounded-lg border border-gray-400">
          <input
            type="text"
            placeholder="Search Student and ID"
            className="bg-transparent outline-none w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={18} className="text-gray-500" />
        </div>
            {/* Add Student Button */}
        <button onClick={()=>setIsModal(true)} className="flex items-center gap-2 bg-[#0B56A4] text-white px-4 py-2 rounded-lg cursor-pointer">
          <Plus size={18} /> Add Student
        </button>
        </div>
       
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg border max-h-[calc(100vh-380px)] border-gray-400 ">
        <table className="w-full ">
          <thead className="sticky top-0">
            <tr className="bg-[#08384F] text-white text-sm">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length !== 0 ?(
                filteredData.map((item, index)=>{
                    return   <tr
                key={index}
                className={`text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                }`}
              >
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.year}</td>
                <td className="py-3 px-4">{item.department}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4 flex justify-center gap-4">
                 <div className="bg-[#0567CE] w-8 h-8 rounded-full flex justify-center items-center">
                     <Eye
                    size={18}
                    className="text-white cursor-pointer hover:scale-110"
                  />
                 </div>
                 <div className="bg-[#22DE6F] w-8 h-8 rounded-full flex justify-center items-center">
                  <Pencil
                    size={18}
                    className="text-white cursor-pointer hover:scale-110"
                  />
                 </div>
                  <div className="bg-[#F24343] w-8 h-8 rounded-full flex justify-center items-center">
                    <Trash2 size={18} className="text-white cursor-pointer hover:scale-110"/>
                    </div>
                  

                </td>
              </tr>
                })
            ):(<div className="translate-x-[400px]  mt-6">
                        <img src={noData} className="w-[30%]" />
                    <h1 className="text-gray-500 mb-4 translate-x-[30px] mt-2">No data found!</h1>
                </div>) }
          </tbody>
        </table>
      </div>
      {isModal && <AddStudentCanvas onClose={onClose}/>}
    </div>
  );
};

export default StudentManagementTable;
