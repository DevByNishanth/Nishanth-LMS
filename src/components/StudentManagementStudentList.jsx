import React, { useState, useEffect } from "react";
import { Search, Pencil } from "lucide-react";

const StudentManagementStudentList = ({
    setIsSwapModal,
    students,
    selectedStudents,
    setSelectedStudents,
}) => {
    const [searchText, setSearchText] = useState("");
    const [filteredStudents, setFilteredStudents] = useState(students);

    // 🔍 Filter Logic
    useEffect(() => {
        if (!searchText.trim()) {
            setFilteredStudents(students);
        } else {
            const lower = searchText.toLowerCase();
            setFilteredStudents(
                students.filter(
                    (item) =>
                        item.id.toLowerCase().includes(lower) ||
                        item.name.toLowerCase().includes(lower)
                )
            );
        }
    }, [searchText, students]);

    // ✔ Checkbox selecting logic
    const toggleSelection = (student) => {
        if (selectedStudents.includes(student.id)) {
            setSelectedStudents(selectedStudents.filter((s) => s !== student.id));
        } else {
            setSelectedStudents([...selectedStudents, student.id]);
        }
    };

    return (
        <div className="w-full h-full bg-white border border-[#D6D6D6] rounded-xl p-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-[#282526] font-medium">
                    Total Students (<span className="text-[#0B56A4]">{students.length}</span>)
                </h2>

                <button onClick={() => setIsSwapModal(true)} className="flex items-center gap-2 text-white bg-[#0B56A4] px-3 py-1.5 rounded-md text-sm">
                    <Pencil size={14} />
                    Edit
                </button>
            </div>

            {/* Search */}
            <div className="relative mt-3">
                <input
                    type="text"
                    placeholder="Search Student id and name"
                    className="w-full px-4 py-2 border border-[#D6D6D6] rounded-md outline-none pr-10"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-700 w-4 h-4" />
            </div>

            {/* Student list */}
            <div className="mt-3 max-h-[calc(100vh-300px)] overflow-auto pr-1">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <label
                            key={student.id}
                            className="flex items-center gap-3 py-2 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4"
                                checked={selectedStudents.includes(student.id)}
                                onChange={() => toggleSelection(student)}
                            />
                            <span className="text-gray-700">
                                {student.id} - {student.name}
                            </span>
                        </label>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm mt-4">No students found.</p>
                )}
            </div>
        </div>
    );
};

export default StudentManagementStudentList;
