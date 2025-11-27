import React, { useState } from "react";
import { X } from "lucide-react";

const SwapStudentModal = ({ sections, onClose, onSave }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleRowClick = (value) => {
        setSelectedOption(value);
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30 z-60"></div>

            {/* Modal */}
            <section className="fixed top-1/2 left-1/2 z-65 w-[32%] bg-white rounded-lg shadow-lg p-6 
                                -translate-x-1/2 -translate-y-1/2 animate-fadeIn">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium">Edit Allocation</h2>
                    <button onClick={onClose} className="text-gray-600 cursor-pointer hover:text-black">
                        <X size={22} />
                    </button>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-3">
                    {sections.map((sec, index) => (
                        <div
                            key={index}
                            className="border border-[#D6D6D6] rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                            onClick={() => handleRowClick(sec)}
                        >
                            <input
                                type="radio"
                                name="swap_option"
                                checked={selectedOption === sec}
                                onChange={() => handleRowClick(sec)}
                                className="w-4 h-4"
                            />
                            <label className="cursor-pointer text-gray-700">
                                Swap to {sec} - ({sec.students} Count)
                            </label>
                        </div>
                    ))}

                    {/* Unallocate */}
                    <div
                        className="border border-[#D6D6D6] rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                        onClick={() => handleRowClick("unallocate")}
                    >
                        <input
                            type="radio"
                            name="swap_option"
                            checked={selectedOption === "unallocate"}
                            onChange={() => handleRowClick("unallocate")}
                            className="w-4 h-4"
                        />
                        <label className="cursor-pointer text-gray-700">Unallocate</label>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onSave(selectedOption)}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </section>
        </>
    );
};

export default SwapStudentModal;
