import React from "react";
import Cast from "../assets/castingImg.png";

export default function CastingCard({ role = "Acting" }) {
  return (
    <div
      className="font-['Source_Sans_3'] group w-full bg-white shadow-md overflow-hidden border-10 border-transparent hover:border-[#8B3C68] transition-colors duration-200"
    >
      {/* Card Image */}
      <div className="relative">
        <img
          src={Cast}
          alt="Casting"
          className="w-full h-[180px] sm:h-[200px] md:h-[228px] object-cover border-b-8 border-transparent group-hover:border-[#8B3C68] transition-colors duration-200"
        />

        {/* Role Tag */}
        <p className="absolute bottom-[-10px] right-4 bg-[#8B3C68] text-white text-sm px-3 py-1 rounded">
          {role}
        </p>
      </div>

      {/* Card Content */}
      <div className="px-4 pt-4 pb-6 text-[#333] group-hover:text-[#8B3C68] text-sm leading-relaxed">
        <p className="mb-4 line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>

        {/* Info + Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Info */}
          <div className="flex flex-col gap-2 group-hover:text-[#8B3C68]">
            <span>📍 Mumbai</span>
            <span>💰 Paid</span>
            <span>📅 10 May</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <button className="w-full sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
              4 Days to Expire
            </button>
            <button className="w-full sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
