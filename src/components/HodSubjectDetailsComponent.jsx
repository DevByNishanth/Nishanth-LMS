import axios from "axios";
import { ArrowRight, ChevronRight, Pencil, Plus, Trash, X } from "lucide-react";
import React, { useState } from "react";

const tableHeader = ["Subject", "Section", "Staff", "Action"];
const regulations = ["2026", "2029", "2032", "2035"];
const semester = [1, 2, 3, 4, 5, 6, 7, 8];
const subjects = [
  { subject: "CS6801- Electronic and communication" },
  { subject: "CS6802- Electronic and communication" },
];

const HodSubjectDetailsComponent = () => {
  // states
  const [selectedType, setSelectedType] = useState("theory");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [selectedId, setSelectedId] = useState(null)
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  // const [subjectData, setSubjectData] = useState([
  //   {
  //     subject: "CS6801 - Java",
  //     sections: [
  //       { sectionName: "Section A", staff: "Surya Chandran" },
  //       { sectionName: "Section B", staff: "Nishanth" },
  //       { sectionName: "Section C", staff: "Sathiya" },
  //     ],
  //   },
  //   {
  //     subject: "CS6802 - Electronic and communication",
  //     sections: [],
  //   },
  // ]);

  const [subjectData, setSubjectData] = useState([
    {
      subject: "CS6801 - Electronic and communication",
      sections: [],
      _id: 1
    },
    {
      subject: "CS6802 - Electronic and communication",
      sections: [],
      _id: 2
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
    {
      subject: "CS6803 - Java",
      sections: [],
      _id: 3
    },
  ]);

  //   functions ------------------------------------------->

  const addSection = (index) => {
    const newData = [...subjectData];
    newData[index].sections.push({
      sectionName: `Section ${String.fromCharCode(
        65 + newData[index].sections.length
      )}`,
      staff: "Select Staff",
    });
    console.log("new data : ", newData)
    setSubjectData(newData);
  };

  const openModal = (index, id) => {
    console.log("selected id : ", id);
    setSelectedId(id)
    setSelectedSubjectIndex(index);
    setSelectedSection(""); // reset
    setSelectedStaff(""); // reset
    setIsModalOpen(true);
  };

  const saveSectionAndStaff = async () => {
    if (!selectedSection || !selectedStaff) {
      alert("Please select both fields");
      return;
    }
    if (selectedId == null) {
      console.error("Error occured => Id is not selected")
    }
    const payload = {
      selectedId: selectedId,
      sectionName: selectedSection,
      staff: selectedStaff
    }
    // try {
    //   const response = await axios.put(`http://api/postSectionData/${selectedId}`, {
    //     payload
    //   });
    //   setSelectedId(null)
    // } catch (err) {
    //   setSelectedId(null)
    // }


    const newData = [...subjectData];
    newData[selectedSubjectIndex].sections.push({
      sectionName: selectedSection,
      staff: selectedStaff,
    });

    setSubjectData(newData);
    setIsModalOpen(false);
  };
  console.log("data : ", subjectData);
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
          <div className="first-tab-container max-h-[calc(100vh-160px)] overflow-auto border border-gray-300 rounded-lg col-span-3 px-4 py-6">
            <button
              onClick={() => setSelectedType("theory")}
              className={`w-full   flex gap-2 items-center justify-between px-4 py-2 rounded-lg ${selectedType.toLowerCase() == "theory"
                ? "bg-[#0B56A4] text-white"
                : "border border-gray-300"
                }`}
            >
              Theory <ChevronRight />
            </button>
            <button
              onClick={() => setSelectedType("lab")}
              className={`w-full mt-2 flex gap-2 items-center justify-between px-4 py-2 rounded-lg ${selectedType.toLowerCase() == "lab"
                ? "bg-[#0B56A4] text-white"
                : "border border-gray-300"
                }`}
            >
              Lab <ChevronRight />
            </button>
          </div>
          <div className="second-tab-container rounded-lg col-span-9 max-h-[calc(100vh-160px)] overflow-auto">
            <table className="w-[100%]   ">
              <tr className=" thead text-black sticky top-0 z-10">
                {tableHeader.map((item) => {
                  return <th className="pl-4 py-2">{item}</th>;
                })}
              </tr>
              <tbody className="border border-gray-300 ">
                {subjectData.map((item, index) => {
                  return (
                    <>
                      {/* MAIN ROW */}

                      <tr className="border-t border-gray-400 ">
                        <td className="pl-4 py-3 w-[30%] border-rd border-gray-400">{item.subject}</td>

                        {/* Section Column */}
                        <td className="py-3 pr-4 ">
                          {/* Show all existing sections */}
                          {item.sections.map((sec, secIndex) => (
                            <section className="flex items-center gap-4">
                              <div
                                key={secIndex}
                                className="px-3  py-2 my-1 rounded w-fit ml-10 bg-[#eef3ff] "
                              >
                                {sec.sectionName}
                              </div>
                              <h1><ArrowRight /></h1>
                            </section>
                          ))}
                        </td>

                        {/* Staff Column */}
                        <td className="py-3 ">
                          {item.sections.length === 0 ? (
                            <div>---</div>
                          ) : (
                            item.sections.map((sec) => (
                              <div className="px-3 py-2 my-2 w-fit ml-10 rounded ">
                                {sec.staff}
                              </div>
                            ))
                          )}
                        </td>

                        {/* Action Column */}
                        <td className="">
                          {item.sections.length === 0
                            ? ""
                            : item.sections.map(() => (
                              <div className="flex items-center gap-3 my-3">
                                <button className="bg-[#00A343]  text-white w-8 h-8 flex p-2 justify-center items-center rounded-full">
                                  <Pencil className="w-4 h-4" />
                                </button>
                                <button className="bg-[#F24343] text-white w-8 h-8 flex p-2 justify-center items-center rounded-full">
                                  <Trash className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                        </td>
                      </tr>
                      {/* Button should ALWAYS be visible */}
                      <div className="btn-container w-fit m-auto mb-2 translate-x-[320px]">
                        <button
                          onClick={() => openModal(index, item._id)}
                          className="flex gap-2 items-center bg-[#0B56A4] hover:bg-[#0b55a4da]  cursor-pointer w-[250px] text-center text-white px-3 py-2 rounded mt-2"
                        >
                          <Plus /> Add Section and Staff
                        </button>
                      </div>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-70 bg-black/40"
          ></div>
          <div className="bg-white rounded-lg w-[520px] py-5 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  z-80">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2 px-4">
              <h2 className="text-lg font-medium">
                Add Section and Staff Details
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-800 text-xl bg-gray-100 p-1 rounded-full cursor-pointer"
              >
                <X />
              </button>
            </div>

            {/* Section Dropdown */}
            <div className="mb-4 mx-4">
              <label className="text-sm text-gray-700">Section</label>
              <select
                className="border border-gray-300 rounded w-full px-3 py-2 mt-1"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="">Select Section</option>
                <option value="Section A">Section A</option>
                <option value="Section B">Section B</option>
                <option value="Section C">Section C</option>
              </select>
            </div>

            {/* Staff Dropdown */}
            <div className="mb-4 mx-4">
              <label className="text-sm text-gray-700">Staff Name</label>
              <select
                className="border border-gray-300 rounded w-full px-3 py-2 mt-1"
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
              >
                <option value="">Select Staff</option>
                <option value="Surya Chandran">Surya Chandran</option>
                <option value="Praveen Kumar">Praveen Kumar</option>
                <option value="Deepika M">Deepika M</option>
              </select>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-2 mx-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="border border-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveSectionAndStaff}
                className="bg-[#0b55a3] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HodSubjectDetailsComponent;
