import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Bell, ChevronRight, User } from "lucide-react";
import notification from '../assets/notification.svg'
import StudentYearComponent from '../components/StudentYearComponent';
import StudentSectionComponent from '../components/StudentSectionComponent';
import StudentmanagementStatCard from '../components/StudentmanagementStatCard';
import StudentManagementStudentList from '../components/StudentManagementStudentList';
import StudentList from '../components/StudentList';
import SwapStudentModal from '../components/SwapStudentModal';

const years = [
    "2023-2024",
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
];

const year = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year"
]



const SectionManagementPage = () => {
    // Auth 
    const apiUrl = import.meta.env.VITE_API_URL;

    // states 
    const [selectedAcademicYear, setSelectedAcademicYear] = useState("2025-2026")
    const [selectedYear, setSelectedYear] = useState("1st Year");
    const [sections, setSections] = useState(["Section A", "Section B", "Section C"])
    const [selectedSection, setSelectedSection] = useState("Section A")
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [students, setStudents] = useState([
        { id: "26CSE001", name: "Abishek K" },
        { id: "26CSE002", name: "Rohit S" },
        { id: "26CSE003", name: "Manoj K" },
        { id: "26CSE004", name: "Dinesh P" },
        { id: "26CSE005", name: "Sanjay R" },
        { id: "26CSE006", name: "Keerthivasan M" },
        { id: "26CSE007", name: "Harish K" },
        { id: "26CSE008", name: "Yugesh A" },
        { id: "26CSE009", name: "Vijay R" },
        { id: "26CSE010", name: "Praveen S" },
        { id: "26CSE006", name: "Keerthivasan M" },
        { id: "26CSE007", name: "Harish K" },
        { id: "26CSE008", name: "Yugesh A" },
        { id: "26CSE009", name: "Vijay R" },
        { id: "26CSE010", name: "Praveen S" },
    ]);
    const [isSwapModal, setIsSwapModal] = useState(false)


    // functions 
    const onClose = () => {
        setIsSwapModal(false)
    }

    return (
        <>
            <section className="w-full h-screen flex">
                <div className="w-[20%]">
                    <Sidebar />
                </div>
                <div className="container-2 w-[80%] h-full px-6">

                    {/* header section  */}
                    <div className="w-full flex items-center justify-between py-4  bg-white">
                        {/* Left: Breadcrumb */}
                        <div className="flex items-center">
                            <span className="text-lg font-medium text-[#282526]">Section Management</span>
                            <span className="text-gray-600"><ChevronRight /></span>

                            <span className="text-[#0B56A4] font-medium text-lg">
                                Computer Science and Engineering (CSE)
                            </span>
                        </div>

                        {/* Right: Icons */}
                        <div className="flex items-center gap-4">
                            {/* Notification */}
                            <div className="p-2 rounded-full bg-gray-50 shadow-sm hover:shadow-md transition">
                                <img src={notification} className="w-4 h-4" />
                            </div>

                            {/* Profile Image */}
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="profile"
                                className="w-10 h-10 rounded-full border"
                            />
                        </div>
                    </div>

                    {/* main-content-container */}
                    <div className="main-container mt-2">

                        {/* heading  */}
                        <header className='flex items-center justify-between'>
                            <h1 className='text-[#282526] font-medium text-lg'>Student Details - Academic Year ({selectedAcademicYear})</h1>
                            <select onChange={(e) => setSelectedAcademicYear(e.target.value)} className='border w-fit outline-none px-4 py-2 border-gray-300 rounded'>
                                {years.map((item) => {
                                    return <option value={item}>{item}</option>
                                })}
                            </select>
                        </header>

                        {/* content section  */}
                        <div className="content-container mt-4 grid grid-cols-12 gap-4 h-[calc(100vh-160px)]">
                            {/* year container  */}
                            <div className="year-container col-span-3 h-[100%]">
                                <StudentYearComponent years={year} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                            </div>
                            <div className="year-container col-span-4 h-[100%]">
                                <StudentSectionComponent sections={sections} setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
                            </div>
                            <div className="year-container col-span-5  h-[100%]">
                                <StudentManagementStudentList
                                    setIsSwapModal={setIsSwapModal}
                                    students={students}
                                    selectedStudents={selectedStudents}
                                    setSelectedStudents={setSelectedStudents}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isSwapModal && <SwapStudentModal sections={sections} onClose={onClose} />}

        </>
    )
}

export default SectionManagementPage