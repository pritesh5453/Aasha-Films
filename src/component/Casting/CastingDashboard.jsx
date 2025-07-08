import React from "react";
import MainContent from "../Casting/MainContent";
import TopBar from "../TopBar";
import ProfileSection from "../ProfileProd/ProfileProd";

export default function CastingDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      {/* Header */}
      <TopBar />

      {/* Body */}
     <div className="flex flex-col md:flex-row h-screen p-8">
  {/* Left Sidebar */}
  <div className="md:w-1/4 md:mt-2 overflow-hidden">
    <ProfileSection />
  </div>

  {/* Right Content (Scrollable) */}
  <main className="flex-1 md:ml-4 mt-4 md:mt-2 overflow-y-auto h-full">
    <MainContent />
  </main>
</div>

    </div>
  );
}
