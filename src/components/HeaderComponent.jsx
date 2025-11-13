import React from "react";
import { Bell, ChevronRight } from "lucide-react";
import notificationIcon from "../assets/notification.svg";
const HeaderComponent = ({ title, second, secondColor }) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white ">
      <div className="flex gap-1 items-center">
        <h1 className="text-lg font-medium text-[#282526]">{title}</h1>
        {second && <ChevronRight />}
        {second ? (
          <div className={`${secondColor} font-medium`}>{second}</div>
        ) : (
          ""
        )}
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-3">
        {/* Notification Icon */}
        <div className="p-2 rounded-full bg-gray-50 shadow-sm hover:shadow-md transition">
          <img src={notificationIcon} className="w-4 h-4" />
        </div>

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover shadow-sm"
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
