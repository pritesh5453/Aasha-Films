import React from "react";

export default function ProjectCard({ image, title, desc }) {
  return (
    <div
      className="w-[237px] h-[480px] bg-[#fef8ec] shadow rounded-sm flex flex-col overflow-hidden"
      style={{ top: "179px", left: "60px" }} // Optional, only if you’re absolutely positioning
    >
      <div className=" bg-[#FFF5DA]flex-1 flex flex-col items-center justify-center">
        <div className="">
          <img
            class
            src={image}
            alt={title}
            className="w-[237px] h-[342px] object-cover"
          />
        </div>
        <div className=" flex flex-col gap-3 items-center mt-4">
          <h3 className="text-sm font-playfair  leading-tight text-[#2D2D2D]">
            Film – <span className="text-[#8B3C68] font-bold">{title}</span>
          </h3>
          <p className="text-xs text-gray-600 leading-tight">{desc}</p>

          <button className="mt-2 px-3 py-1 border border-[#8B3C68] text-xs text-[#8B3C68] font-bold hover:bg-purple-100">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
}
