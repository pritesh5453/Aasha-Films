import React from "react";
import logo from "../assets/Logo.png";
import google from "../assets/Google.png";
import register from "../assets/157.png";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4 font-['Source Sans 3',sans-serif]">
      <div className="flex w-[1066px] h-[751px] shadow-xl  overflow-hidden bg-white">
        {/* Left side */}
        <div className="hidden lg:flex w-[533px] h-[751px] bg-[#8B3C68] items-center justify-center">
          <img src={register} alt="Illustration" className="w-[280px] h-auto" />
        </div>

        {/* Right side */}
        <div className="flex flex-col w-[533px] h-[751px] p-8 justify-center items-center">
          <img src={logo} alt="Logo" className="h-16 mb-2" />
          <h2 className="text-center text-base mb-4 leading-snug">
            Create Your Account and Begin <br /> Casting with Confidence.
          </h2>

          <form className="w-full space-y-3">
            <input
              type="text"
              placeholder="Full Name (or Team Lead Name)*"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Company/Production name"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
            <select className="w-full border border-gray-300 p-2 rounded text-sm">
              <option value="" disabled selected>Type Of Work*</option>
              <option value="actor">Actor</option>
              <option value="director">Director</option>
              <option value="editor">Editor</option>
            </select>
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
            <input
              type="password"
              placeholder="Password*"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />

            <button
              type="submit"
              className="bg-[#8B3C68] text-white w-full p-2 rounded font-semibold hover:bg-[#722c52] text-sm mt-2"
            >
              REGISTER
            </button>

            {/* Google button with gradient border */}
            <div className="bg-gradient-to-r from-[#E6BCBC] via-[#BC6A8E] to-[#8C3D69] p-[1px] rounded w-full mt-2">
              <button
                type="button"
                className="bg-white w-full p-2 rounded flex items-center justify-center space-x-2 text-sm"
              >
                <img src={google} alt="Google" className="h-4 w-4" />
                <span>Continue with Google</span>
              </button>
            </div>

            <p className="text-center text-xs mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-[#8B3C68] font-medium underline">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
