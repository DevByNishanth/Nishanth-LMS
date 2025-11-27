import React from "react";
import { ChevronRight } from "lucide-react";

const StudentSectionComponent = ({
    sections,
    selectedSection,
    setSelectedSection,
}) => {
    return (
        <div className="w-full h-[100%] bg-white border border-[#D6D6D6] rounded-xl p-4 space-y-3">
            {sections.map((section, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedSection(section)}
                    className={`
            w-full flex items-center justify-between px-4 py-3 rounded-lg 
            border border-[#D6D6D6] transition
            ${selectedSection === section
                            ? "bg-[#0B56A4] text-white border-[#0B56A4]"
                            : "bg-white text-gray-800 hover:bg-gray-50"
                        }
          `}
                >
                    <span className="font-medium">{section}</span>
                    <ChevronRight
                        className={`w-6 h-6 ${selectedSection === section ? "text-white" : "text-gray-500"
                            }`}
                    />
                </button>
            ))}
          
        </div>
    );
};

export default StudentSectionComponent;
