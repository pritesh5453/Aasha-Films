import React, { useRef } from "react";
import { FiCamera } from "react-icons/fi";
import Topbar from "./TopBar.jsx";

export default function ProfilePage() {
  const fileInputs = {
    profilePhoto: useRef(),
    headShot: useRef(),
    fullBody: useRef(),
    introVideo: useRef(),
  };

  const handleFileClick = (refName) => fileInputs[refName].current.click();

  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3']">
      {/* ✅ Topbar Component */}
      <Topbar />

      {/* Container */}
      <div className="max-w-6xl mx-auto mt-10 p-4">
        {/* ✅ Modified Top Profile Card */}
        <div className="bg-white shadow border border-[#E5E7EB] p-4 flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-8 w-full">
          {/* Left profile part */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-24 h-24 flex-shrink-0">
              {/* Progress circle */}
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#8B3C68]"
                  strokeWidth="3"
                  strokeDasharray="40,100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              {/* Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-400">
                  <i className="fa fa-user"></i>
                </div>
              </div>
              {/* Progress text BELOW circle */}
              <div className="mt-2 text-[#8B3C68] text-sm font-semibold text-center">
                40%
              </div>
            </div>

            {/* Text part */}
            <div>
              <h2 className="text-lg font-semibold">Pritesh Pawar ✏️</h2>
              <p className="text-sm text-gray-500">Profile Type: Actor</p>
            </div>
          </div>

          {/* Right part */}
          <p className="text-xs text-gray-400 self-center sm:self-end">
            Profile last updated - Today
          </p>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">
              • Personal Information
            </h3>
            {[
              "Date of Birth*",
              "Gender*",
              "City*",
              "State*",
              "Phone Number*",
              "Email ID*",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}
          </div>

          {/* Physical Attributes */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">
              • Physical Attributes
            </h3>
            {[
              "Height*",
              "Weight*",
              "Hair Color*",
              "Body Type*",
              "Skin Tone*",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}
          </div>

          {/* Social Media & Availability */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">
              • Social Media
            </h3>
            {["Instagram Link*", "Facebook Link"].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}

            <h3 className="text-[#8B3C68] font-semibold mb-2 mt-4">
              • Availability
            </h3>
            {[
              "Available From*",
              "Willing to Travel*",
              "Preferred Locations*",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}
          </div>

          {/* Profile Media */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">
              • Profile Media
            </h3>
            {[
              { label: "Profile Photo*", refName: "profilePhoto" },
              { label: "Head shot(front facing)", refName: "headShot" },
              { label: "Full Body shot", refName: "fullBody" },
              { label: "Intro Video / Showreel*", refName: "introVideo" },
            ].map((item, index) => (
              <div key={index} className="relative mb-3">
                <FiCamera
                  className="absolute top-3 left-3 text-[#8B3C68] text-xl cursor-pointer"
                  onClick={() => handleFileClick(item.refName)}
                />
                <input
                  type="text"
                  placeholder={item.label}
                  className="w-full border border-[#8B3C68] pl-10 pr-4 py-2 rounded-full focus:outline-none"
                  onClick={() => handleFileClick(item.refName)}
                  readOnly
                />
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputs[item.refName]}
                />
              </div>
            ))}
          </div>

          {/* Skills & Languages */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">
              • Skills & Languages
            </h3>
            {[
              "Languages Known",
              "Dialects/Accents",
              "Skills (dance, martial arts, hosting, etc.)",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}
          </div>

          {/* Experience */}
          <div className="w-full">
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Experience</h3>
            {[
              "Past Projects (Name, Role, Year)*",
              "Special Appearances or Training*",
            ].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}

            <button className="bg-[#8B3C68] text-white px-8 py-2 rounded-full w-full mt-4">
              Save and Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
