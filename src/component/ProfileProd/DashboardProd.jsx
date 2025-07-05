import React from "react";

import AddJobPost from "./AddJobPost";
import ProfileSection from "./ProfileProd";
import TopBar from "../TopBar";

export default function DashboardProd() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />

      <div className="flex flex-1 flex-col md:flex-row gap-4 sm:gap-0 px-2 sm:px-4 py-4 bg-[#f5f5f5] ml-2 overflow-hidden">
        {/* Sidebar - Profile */}
        <div className="w-full md:w-[380px] shrink-0 overflow-hidden">
          <ProfileSection />
        </div>

        {/* Main Content - Add Job Post */}
        <div className="flex-1 w-full overflow-y-auto">
          <div className="bg-white shadow-md rounded-lg p-5 min-h-fit">
            <AddJobPost />
          </div>
        </div>
      </div>
    </div>
  );
}
