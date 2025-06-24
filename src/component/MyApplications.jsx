import React from "react";
import CastingCard from "../component/CastingCard";

export default function MyApplications() {
  const dummyData = [
    { title: "Movie X Audition", image: "/images/casting-applied1.png", description: "Main Role", status: "Applied" },
    { title: "TV Show Y Audition", image: "/images/casting-applied2.png", description: "Supporting Role", status: "Shortlisted" }
  ];

  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-4">
      {dummyData.map((item, index) => (
        <div key={index} className="relative">
          {/* 🔖 Status badge */}
          <span
            className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-semibold rounded ${
              item.status === "Applied"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {item.status}
          </span>

          {/* 🎯 Original Card */}
          <CastingCard title={item.title} image={item.image} description={item.description} />
        </div>
      ))}
    </div>
  );
}
