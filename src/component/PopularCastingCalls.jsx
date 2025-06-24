import React from "react";
import CastingCard from "../component/CastingCard";

export default function PopularCastingCalls() {
  const dummyData = [
    { title: "Movie A Audition", image: "/images/casting1.png", description: "Main Role" },
    { title: "Web Series B Audition", image: "/images/casting2.png", description: "Supporting Role" },
    { title: "TV Show C Audition", image: "/images/casting3.png", description: "Cameo Role" },
    { title: "TV Show C Audition", image: "/images/casting3.png", description: "Cameo Role" },
    { title: "TV Show C Audition", image: "/images/casting3.png", description: "Cameo Role" },
    { title: "TV Show C Audition", image: "/images/casting3.png", description: "Cameo Role" },
    { title: "TV Show C Audition", image: "/images/casting3.png", description: "Cameo Role" }
  ];

  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-4">
      {dummyData.map((item, index) => (
        <CastingCard key={index} {...item} />
      ))}
    </div>
  );
}
