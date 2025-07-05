import React from "react";
import vector from "../../assets/Vector.png";

export default function ProfileProd({ onSectionChange, selected }) {
  return (
    <div className="w-full sm:w-[380px] md:w-[350px] bg-white shadow-md p-6 rounded-lg font-['Source_Sans_3'] text-center">
      {/* Circular Progress */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#eee"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#8B3C68"
            strokeWidth="12"
            fill="none"
            strokeDasharray={2 * Math.PI * 54}
            strokeDashoffset={2 * Math.PI * 54 * (1 - 0.4)}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={vector} alt="Profile" className="w-14 h-14 opacity-50" />
        </div>
      </div>

      {/* Percentage and profile details */}
      <p className="text-[#8B3C68] font-semibold text-sm mb-1">50%</p>
      <h2 className="font-bold text-[#333] text-base">Emmay Entertainment</h2>
      <p className="text-sm text-[#333] mb-1">Type of work : Movies</p>
      <p className="text-xs text-[#aaa] mb-4">Last update today</p>

      <button className="bg-[#8B3C68] text-white text-sm font-medium py-2 px-4 mb-5 w-full sm:w-auto rounded hover:opacity-90 transition">
        Complete Profile
      </button>

      {/* Sidebar Options */}
      <div className="space-y-2">
        <SidebarItem
          icon="🎬"
          label="Add Job Post"
          active={selected === "add-job-post"}
          onClick={() => onSectionChange("add-job-post")}
        />
        <SidebarItem
          icon="▶️"
          label="Previous Job Posts"
          active={selected === "previous-job-posts"}
          onClick={() => onSectionChange("previous-job-posts")}
        />
        <SidebarItem
          icon="📹"
          label="Upcoming Projects"
          active={selected === "upcoming-projects"}
          onClick={() => onSectionChange("upcoming-projects")}
        />
        <SidebarItem
          icon="📹"
          label="Profiles"
          active={selected === "profiles"}
          onClick={() => onSectionChange("profiles")}
        />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 w-full px-3 py-2 border border-[#ddd] rounded text-sm transition ${
        active
          ? "bg-[#f3e4eb] border-[#8B3C68] font-bold text-[#333]"
          : "hover:bg-[#f9f9f9] text-[#333]"
      }`}
    >
      <span className="text-base">{icon}</span>
      {label}
    </button>
  );
}
