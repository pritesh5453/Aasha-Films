import React, { useRef } from "react";
import { FiCamera } from "react-icons/fi";
import logo from "../assets/158.png";

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
      {/* Header */}
      <header className="bg-[#8B3C68] p-4 flex justify-between items-center text-white">
        <img src={logo} alt="Logo" className="w-28" />
        <span className="font-medium hidden md:block">Welcome, Samiksha Raka</span>
      </header>

      {/* Container */}
      <div className="max-w-6xl mx-auto mt-10 p-4">
        {/* Top Profile Card */}
        <div className="bg-white shadow rounded p-6 flex justify-between items-center mb-8 border border-[#8B3C68]">
          {/* ...your profile card top part */}
          <div className="flex items-center gap-5">
            {/* profile image & progress */}
            <div className="relative w-28 h-28">
              {/* progress circles */}
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#8B3C68]"
                  strokeWidth="3"
                  strokeDasharray="40, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-4xl">
                  <i className="fa fa-user"></i>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 text-[#8B3C68] text-xs font-semibold">
                40%
              </div>
            </div>
            <div>
              
              <h2 className="text-xl font-semibold">Samiksha Raka</h2>
              <p className="text-sm text-gray-500">Profile Type : Actress</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Personal Information</h3>
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
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Physical Attributes</h3>
            {["Height*", "Weight*", "Hair Color*", "Body Type*", "Skin Tone*"].map((item, index) => (
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
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Social Media</h3>
            {["Instagram Link*", "Facebook Link"].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}

            <h3 className="text-[#8B3C68] font-semibold mb-2 mt-4">• Availability</h3>
            {["Available From*", "Willing to Travel*", "Preferred Locations*"].map((item, index) => (
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
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Profile Media</h3>
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
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Skills & Languages</h3>
            {["Languages Known", "Dialects/Accents", "Skills (dance, martial arts, hosting, etc.)"].map(
              (item, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={item}
                  className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
                />
              )
            )}
          </div>

          {/* Experience */}
          <div className="w-full">
            <h3 className="text-[#8B3C68] font-semibold mb-2">• Experience</h3>
            {["Past Projects (Name, Role, Year)*", "Special Appearances or Training*"].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                className="w-full mb-3 border border-[#8B3C68] px-4 py-2 rounded-full focus:outline-none"
              />
            ))}

            {/* Save and Go back Button with full width */}
            <button className="bg-[#8B3C68] text-white px-8 py-2 rounded-full w-full mt-4">
              Save and Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
