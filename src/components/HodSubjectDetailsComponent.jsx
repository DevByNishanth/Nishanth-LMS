import axios from "axios";
import { ArrowRight, ChevronRight, Pencil, Plus, Trash, X } from "lucide-react";
import React, { useState } from "react";
import SubjectRow from "./SubjectRow";

const tableHeader = ["Subject", "Section", "Staff", "Action"];
const regulations = ["2026", "2029", "2032", "2035"];
const semester = [1, 2, 3, 4, 5, 6, 7, 8];
const subjects = [
  { subject: "CS6801- Electronic and communication" },
  { subject: "CS6802- Electronic and communication" },
];

const data = [
  {
    subject: "Electronic and Communication",
    sections: [
      {
        sectionName: "Section A",
        staff: { name: "Surya Chandran" },
      },
      {
        sectionName: "Section B",
        staff: null,
      },
      {
        sectionName: "Section C",
        staff: { name: "Surya Chandran" },
      },
    ],
  },
  {
    subject: "Electronic and Communication",
    sections: [
      {
        sectionName: "Section A",
        staff: { name: "Surya Chandran" },
      },
      {
        sectionName: "Section B",
        staff: null,
      },
      {
        sectionName: "Section C",
        staff: { name: "Surya Chandran" },
      },
    ],
  },
  {
    subject: "Electronic and Communication",
    sections: [
      {
        sectionName: "Section A",
        staff: { name: "Surya Chandran" },
      },
      {
        sectionName: "Section B",
        staff: null,
      },
      {
        sectionName: "Section C",
        staff: { name: "Surya Chandran" },
      },
    ],
  },
];

const HodSubjectDetailsComponent = () => {
  // states
  const [selectedType, setSelectedType] = useState("theory");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");

  const [subjectData, setSubjectData] = useState([
    {
      subject: "Electronic and Communication",
      sections: [
        {
          sectionName: "Section A",
          staff: {
            name: "Surya Chandran",
            id: "staff_01",
          },
        },
        {
          sectionName: "Section B",
          staff: null,
        },
        {
          sectionName: "Section C",
          staff: {
            name: "Surya Chandran",
            id: "staff_01",
          },
        },
      ],
    },
  ]);

  //   functions ------------------------------------------->

  return (
    <>
      <section className="mt-4">
        {/* header section ---------------  */}
        <div className="header flex items-center justify-end gap-3">
          <select className="border border-gray-300 rounded px-4 py-2 w-[200px]">
            <option value="" disabled>
              Select regulation
            </option>
            {regulations.map((item) => (
              <option>{item} Regulation </option>
            ))}
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 w-[160px]">
            <option value="" disabled>
              Select semester
            </option>
            {semester.map((item) => (
              <option>Semester {item} </option>
            ))}
          </select>
        </div>
        {/* bg-[#08384F] */}
        {/* body section -------------------  */}
        <div className="main-container grid grid-cols-12 gap-2 mt-4">
          <div className="first-tab-container min-h-[calc(100vh-170px)]   overflow-auto border border-gray-300 rounded-lg col-span-3 px-4 py-6">
            <button
              onClick={() => setSelectedType("theory")}
              className={`w-full   flex gap-2 items-center justify-between px-4 py-2 rounded-lg ${
                selectedType.toLowerCase() == "theory"
                  ? "bg-[#0B56A4] text-white"
                  : "border border-gray-300"
              }`}
            >
              Theory <ChevronRight />
            </button>
            <button
              onClick={() => setSelectedType("lab")}
              className={`w-full mt-2 flex gap-2 items-center justify-between px-4 py-2 rounded-lg ${
                selectedType.toLowerCase() == "lab"
                  ? "bg-[#0B56A4] text-white"
                  : "border border-gray-300"
              }`}
            >
              Lab <ChevronRight />
            </button>
          </div>
          {/* table section --------------------------------------  */}
          <div className="second-tab-container rounded-lg col-span-9 max-h-[calc(100vh-170px)] overflow-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 ">
                <tr className="bg-[#083B5C] text-white">
                  <th className="py-3 px-4 text-left">Subject</th>
                  <th className="py-3 px-4 text-left">Section</th>
                  <th className="py-3 px-4 text-left">Staff</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <SubjectRow key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default HodSubjectDetailsComponent;
