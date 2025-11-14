import React, { useState } from "react";
import {
  Palette,
  Image,
  Pin,
  Heart,
  LineChart,
  Flame,
  Wand2,
  Gem,
  Code,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/clgLogo.svg";
import dashboard from "../assets/dashboardIcon.svg";
import semIcon from "../assets/semesterIcon.svg";
import facultyIcon from "../assets/totalFacultyIcon.svg";
import facultyActiveIcon from "../assets/facultyActiveIcon.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const role = "hod";

  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    {
      icon: dashboard,
      label: "Dashboard",
      hodLable: "Dashboard",
      activeIcon: facultyActiveIcon,
      link: "/dashboard",
      hodLink: "/hodDashboard",
    },
    {
      icon: semIcon,
      label: "Subject Management",
      hodLable: "Subject Management",
      link: "/dashboard/semesterRegistration",
      hodLink: "/dashboard/hod_subjectmanagement",
    },
    {
      icon: facultyIcon,
      label: "Faculty Management",
      activeIcon: facultyActiveIcon,
      link: "/dashboard/facultyManagement",
    },
  ];

  // hide faculty management for HOD
  const filteredNavItems = navItems.filter((item) => {
    if (role === "hod" && item.label === "Faculty Management") return false;
    return true;
  });
  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen transition-all duration-300 bg-[#D9EBFE] text-[#f5f6fa] flex flex-col overflow-hidden z-50 ${
          collapsed ? "w-[83px]" : "w-[20%]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-center p-4 text-center">
          <a
            href="#"
            className={`flex items-center gap-3 text-xl font-bold transition-opacity duration-300 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            <img src={logo} className="w-[140px] m-auto object-cover" />
          </a>
          {/* <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg text-[#f5f6fa]"
          >
            <X size={22} />
          </button> */}
        </div>

        {/* {!collapsed && <hr className="border-t-2 border-[#2c3e50] mx-4 mb-2" />} */}

        {/* Nav Content */}
        <div className="relative flex-1 bg-[#D9EBFE]">
          <div
            className="absolute left-0 w-[calc(100%)] h-[54px] bg-[#ffffff] rounded-l-[14px] transition-all duration-200 z-0"
            style={{
              top: `calc(${activeIndex} * 54px + 5px)`,
            }}
          >
            <div className="absolute right-[-1px] bottom-full w-8 h-8 rounded-full shadow-[16px_16px_#ffffff]" />
            <div className="absolute right-[-1px] top-full w-8 h-8 rounded-full shadow-[16px_-16px_#ffffff]" />
          </div>

          {/* Buttons */}

          {filteredNavItems.map((item, index) => (
            <Link
              to={role.toLowerCase() == "hod" ? item.hodLink : item.link}
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative h-[54px] flex items-center cursor-pointer z-10 transition-colors duration-200 px-4 ${
                activeIndex === index ? "text-[#18283b]" : "text-black"
              }`}
            >
              <span className="min-w-[3rem] text-center">
                {activeIndex == index ? (
                  <img src={item.activeIcon} />
                ) : (
                  <img src={item.icon} />
                )}
              </span>
              {!collapsed && (
                <span
                  className={`whitespace-nowrap font-semibold ${
                    activeIndex === index ? "text-[#0B56A4]" : "text-[#282526] "
                  }`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Hamburger Icon */}
      {collapsed && (
        <div
          onClick={() => setCollapsed(false)}
          className="fixed top-3 left-3 text-[#bbd2f0] text-2xl cursor-pointer z-50"
        >
          <Menu size={26} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
