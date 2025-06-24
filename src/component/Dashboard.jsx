import React, { useState } from "react";
import ProfileCard from "../component/ProfileCard";
import PopularCastingCalls from "../component/PopularCastingCalls";
import MyApplications from "../component/MyApplications";
import NewCastingCalls from "../component/NewCastingCalls";
import Topbar from "./TopBar";

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("popular");

  let heading = "";
  let Content;

  if (selectedSection === "popular") {
    heading = "Popular Casting Calls";
    Content = <PopularCastingCalls />;
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

      <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f5f5] font-[Source Sans 3] gap-6 p-4">
        {/* Sidebar: fixed height, non-scrollable */}
        <div className="w-full md:w-[450px] shrink-0 bg-white shadow-md rounded-lg p-6">
          <ProfileCard
            onSectionChange={setSelectedSection}
            selected={selectedSection}
          />
        </div>

        {/* Right Content: scrollable */}
        <div className=" overflow-y-auto max-h-screen  w-full p-5 pr-5">
          <h2 className="text-xl font-[Source Sans 3] text-[#8B3C68] mb-4 font-bold">
            {heading}
          </h2>
          {Content}
        </div>
      </div>
    </div>
  );
}
