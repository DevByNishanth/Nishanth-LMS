import { useState } from "react";
import { Plus } from "lucide-react";

export default function SubjectSubTopicsTable() {
    const [topics, setTopics] = useState([
        {
            sno: "1.1",
            topicName: "Introduction",
            language: "English",
            date: "11-07-2021",
            hours: "45 Minutes",
            aid: "White Board",
            reference: "AI / Dr.Prabhakaran",
        },
        {
            sno: "1.2",
            topicName: "Introduction",
            language: "English",
            date: "11-07-2021",
            hours: "45 Minutes",
            aid: "Smart Board",
            reference: "AI / Dr.Prabhakaran",
        },
    ]);

    const handleAdd = () => {
        const newItem = {
            sno: `${topics.length + 1}.1`,
            topicName: "New Topic",
            language: "English",
            date: "11-07-2021",
            hours: "45 Minutes",
            aid: "White Board",
            reference: "AI / Dr.Prabhakaran",
        };
        setTopics([...topics, newItem]);
    };

    return (
        <div className="table-container w-[84%]">
            <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-160px)] border border-gray-300 rounded-t-lg">
                <table className="w-full text-sm ">
                    <thead className="sticky top-0">
                        <tr className="bg-[#08384F] text-white text-left">
                            <th className="px-4 py-3">S.No</th>
                            <th className="px-4 py-3">Topic Name</th>
                            <th className="px-4 py-3">Teaching Language</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Hours</th>
                            <th className="px-4 py-3">Teaching Aid</th>
                            <th className="px-4 py-3">Reference Book</th>
                        </tr>
                    </thead>

                    <tbody>
                        {topics.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 !== 0 ? "bg-[#E6E9F5]" : "bg-white"} text-[14px]`}
                            >
                                <td className="px-4 py-3">{item.sno}</td>
                                <td className="px-4 py-3">{item.topicName}</td>
                                <td className="px-4 py-3">{item.language}</td>
                                <td className="px-4 py-3">{item.date}</td>
                                <td className="px-4 py-3">{item.hours}</td>
                                <td className="px-4 py-3">{item.aid}</td>
                                <td className="px-4 py-3">{item.reference}</td>
                            </tr>
                        ))}

                        {/* Button Row */}
                        <tr>
                            <td colSpan={7} className="px-4 py-5">
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleAdd}
                                        className="bg-[#0B56A4] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:cursor-pointer transition"
                                    >
                                        <Plus className="w-6 h-6" />
                                        Add New Topics
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    );
}
