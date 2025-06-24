import React from "react";
import CastingCard from "../component/CastingCard";

export default function NewCastingCalls() {
  const dummyData = [
    { title: "New Audition 1", image: "/images/casting-new1.png", description: "Main Role" },
    { title: "New Audition 2", image: "/images/casting-new2.png", description: "Lead Role" }
  ];

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {dummyData.map((item, index) => (
        <CastingCard key={index} {...item} />
      ))}
    </div>
  );
}
