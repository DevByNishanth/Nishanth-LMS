import React from "react";
import { ChevronRight } from "lucide-react";

const StudentYearComponent = ({ years, selectedYear, setSelectedYear }) => {
    console.log(`selected year : ${selectedYear}`)
    return (
        <div className="w-full h-[100%] bg-white border border-[#D6D6D6] rounded-xl p-4 space-y-3">
            {years.map((year, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#D6D6D6] transition
                        ${selectedYear === year
                            ? "bg-[#0B56A4] text-white "
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    <span className="font-medium">{year}</span>
                    <ChevronRight
                        className={`w-6 h-6 ${selectedYear === year ? "text-white" : "text-gray-500"
                            }`}
                    />
                </button>
            ))}
        </div>
    );
};

export default StudentYearComponent;
