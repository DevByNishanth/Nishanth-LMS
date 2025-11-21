import { useEffect, useRef, useState } from "react";
import { Plus, Pencil, Edit, PencilIcon, Search } from "lucide-react";
import man from "../assets/man.svg";
import axios from "axios";
const staffList = [
  {
    id: 1,
    name: "Surya Chandran",
    img: man,
  },
  {
    id: 2,
    name: "Nishanth",
    img: man,
  },
  {
    id: 3,
    name: "Santhiya",
    img: man,
  },
  {
    id: 4,
    name: "Sathiya",
    img: man,
  },
];

export default function SubjectRow({
  item,
  facultyDetails,
  selectedDept,
  selectedType,
  selectedSemester,
  selectedRegulation,
  setSelectedDept,
  setSelectedType,
  setSelectedSemester,
  setSelectedRegulation,
}) {
  // Auth ------------------>
  const token = localStorage.getItem("LmsToken");
  const apiUrl = import.meta.env.VITE_API_URL;

  // states ------------------------>
  const [searchText, setSearchText] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSectionIndex, setModalSectionIndex] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubjectName, setSelectedSubjectName] = useState(null);
  const [subjectId, setSubjectId] = useState(null);

  // ref's --------------------->
  const dropdownRef = useRef(null);

  // useEffect call's -------------------------->

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // functions --------------------------------------->

  // search functionality
  const filteredStaff = facultyDetails.filter((staff) =>
    staff.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // open stafflist functionality ------------------->
  const handleOpen = (sec) => {
    setSubjectId(item.id);
    setSelectedSection(sec.sectionName);
    setSelectedSubjectName(item.subject);
    setIsModalOpen(true);
  };

  // API call post
  async function handleSelectStaff(staff) {
    const payload = {
      department: selectedDept,
      type: selectedType,
      semester: Number(selectedSemester),
      regulation: selectedRegulation,
      subjectId: subjectId,
      sectionName: selectedSection,
      staffId: staff.id,
    };

    console.log("payload : ", payload);
    const response = await axios.post(
      `${apiUrl}api/allocation/assign-staff`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("resp : ", response);
  }

  return (
    <>
      {item.sections.map((sec, secIndex) => (
        <tr key={secIndex} className={` border border-gray-300 text-sm`}>
          {/* SUBJECT (Only for the first section row) */}
          {secIndex === 0 && (
            <td
              rowSpan={item.sections.length}
              className="border-r border-gray-300 px-4 py-6 align-top w-[30%]"
            >
              {item.subject}
            </td>
          )}

          {/* SECTION */}
          <td className="px-4 py-3 w-[35%]">{sec.sectionName}</td>

          {/* STAFF */}
          <td
            className={`px-4 py-3 w-[100%] flex items-center gap-2 ${
              sec.staff === null ? "bg-[#eef2ff]" : "bg-white"
            }`}
          >
            {sec.staff ? (
              <>
                <span className="flex items-center gap-6">
                  {sec?.staff?.name}{" "}
                  <Pencil className="w-4 h-4 text-green-600" />
                </span>
              </>
            ) : (
              <button
                onClick={() => {
                  setModalSectionIndex(secIndex);
                  handleOpen(sec);
                }}
                className="w-10 cursor-pointer h-10 p-2 rounded-full bg-white flex items-center justify-center border border-gray-100"
              >
                <Plus className="text-blue-700" />
              </button>
            )}
          </td>
        </tr>
      ))}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30  justify-center z-50">
          <div
            ref={dropdownRef}
            className="w-[420px] bg-white shadow absolute right-14 top-50 rounded-md py-4 px-2 h-[390px] overflow-auto"
          >
            {/* Search Bar */}
            <div className="search-bar-container relative">
              <input
                type="text"
                placeholder="Search Staff Name"
                className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-slate-400"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button>
                <Search className="text-gray-400 absolute top-[50%] right-4 translate-y-[-50%] " />
              </button>
            </div>

            {/* Staff List */}
            <div className="mt-4 max-h-[240px] overflow-y-auto pr-3 space-y-2">
              {filteredStaff.map((staff) => (
                <label
                  key={staff.id}
                  className="flex items-center justify-between border py-3 px-3  border-gray-300 cursor-pointer hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={staff.img}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p>{staff.name}</p>
                  </div>

                  <input
                    type="radio"
                    name="staff"
                    checked={selectedStaff?.id === staff.id}
                    onChange={() => {
                      setSelectedStaff(staff);
                      handleSelectStaff(staff);
                    }}
                    className="scale-120 accent-blue-900"
                  />
                </label>
              ))}
            </div>

            {/* Buttons */}
            <div className="main-btn-container relative p-2">
              <div className="absolute bottom-[-45px] right-0  flex justify-end gap-3 ">
                <button
                  className="px-4 py-2 rounded-lg border hover:bg-gray-200 border-gray-300 cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="bg-[#0B56A4] hover:bg-[#023a75] cursor-pointer text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    console.log(
                      "Selected staff for section:",
                      modalSectionIndex
                    );
                    setIsModalOpen(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
