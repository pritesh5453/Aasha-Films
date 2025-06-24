import React, { useState } from "react";
import ProfileCard from "../component/ProfileCard";
import CastingCard from "../component/CastingCard";
import MyApplications from "../component/MyApplications";
import NewCastingCalls from "../component/NewCastingCalls";
import Topbar from "./TopBar";
import PopularCastingCalls from "./PopularCastingCalls";

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("popular");

  let heading = "";
  let Content;

  if (selectedSection === "popular") {
    heading = "Popular Casting Calls";
    Content = <PopularCastingCalls/>;
  } else if (selectedSection === "my-applications") {
    heading = "My Applications";
    Content = <MyApplications />;
  } else if (selectedSection === "new-calls") {
    heading = "New Casting Calls for You";
    Content = <NewCastingCalls />;
  }

  return (
    <div className="">
      <Topbar />

      <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f5f5] font-[Source Sans 3] gap-4 sm:gap-6 p-2 sm:p-4">
        {/* Sidebar */}
        <div className="w-full md:w-[40%] lg:w-[450px] shrink-0 bg-white shadow-md rounded-lg p-4 sm:p-6">
          <ProfileCard onSectionChange={setSelectedSection} selected={selectedSection} />
        </div>

        {/* Right Content */}
        <div className="flex-1 overflow-y-auto max-h-screen w-full p-4 sm:p-5">
          <h2 className="text-xl font-[Source Sans 3] text-[#8B3C68] mb-4 font-bold">
            {heading}
          </h2>
          {Content}
        </div>
      </div>
    </div>
  );
}
