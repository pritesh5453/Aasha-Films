import React from "react";
import logo from "../assets/Logo.png";

export default function TopBar() {
  return (
    <div
      className="w-full h-[150px] flex items-center justify-between text-white shadow-md relative px-[54px]"
      style={{
        background:
          "linear-gradient(181.29deg, #E597B7 18.39%, #C77496 70.29%, #8B3C68 122.22%)",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      {/* Left - Logo and Text */}
      <div className="flex items-center gap-4 absolute top-[13px] left-[54px] ">
        <img
          src={logo}
          alt="Logo"
          className="w-[114.57px] h-[132px] object-contain"
        />
        {/* <div className="ml-2 leading-tight">
          <p className="text-lg font-semibold">JOIN SCREEN</p>
          <p className="text-sm font-normal">ASIAN FILM CASTING</p>
        </div> */}
      </div>

      {/* Right - Welcome Text */}
      <div className="ml-auto pr-8 text-lg font-medium text-[#8B3C68]">
        Welcome, Pritesh Pawar
      </div>
    </div>
  );
}
