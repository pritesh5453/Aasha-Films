import React from "react";
import vector from "../assets/Vector.png";

export default function ProfileCard({ onSectionChange, selected }) {
  return (
    <div className="w-full md:w-[350px] bg-white shadow-md p-6 rounded-lg font-['Source_Sans_3'] text-center">
      {/* Circular Progress */}
      <div className="relative w-[120px] h-[120px] mx-auto mb-4">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" stroke="#eee" strokeWidth="12" fill="none" />
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
          <img src={vector} alt="Profile" className="w-[60px] h-[60px] opacity-50" />
        </div>
      </div>

      {/* Percentage and profile details */}
      <p className="text-[#8B3C68] font-semibold text-sm mb-1">40%</p>
      <h2 className="font-bold text-[#333] text-base">Pritesh Pawar</h2>
      <p className="text-sm text-[#333] mb-1">Profile Type : Actress</p>
      <p className="text-xs text-[#aaa] mb-4">Last update today</p>

      <button className="bg-[#8B3C68] text-white text-sm font-medium py-2 px-4 mb-5 w-full sm:w-auto">
        Complete Profile
      </button>

      {/* Sidebar Options */}
      <div className="space-y-3">
        <SidebarItem
          icon="🎬"
          label="Popular Casting Calls"
          active={selected === "popular"}
          onClick={() => onSectionChange("popular")}
        />
        <SidebarItem
          icon="▶️"
          label="My Applications"
          active={selected === "my-applications"}
          onClick={() => onSectionChange("my-applications")}
        />
        <SidebarItem
          icon="📹"
          label="New Casting Calls for You"
          active={selected === "new-calls"}
          onClick={() => onSectionChange("new-calls")}
        />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2 border border-[#ddd] rounded text-sm transition ${
        active
          ? "bg-[#f3e4eb] border-[#8B3C68] font-bold text-[#333]"
          : "hover:bg-[#f9f9f9] text-[#333]"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}

