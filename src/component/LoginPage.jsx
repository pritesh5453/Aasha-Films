import React from "react";
import girl from "../assets/160.png";
import logo from "../assets/158.png";
import googleLogo from "../assets/google.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 bg-[#C26C8E] items-center justify-center p-8">
          <img
            src={girl}
            alt="Login Illustration"
            className="w-3/4 max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 bg-white p-6 md:p-10">
          <div className="text-center mb-6">
            <img src={logo} alt="Logo" className="mx-auto mb-2 w-20 md:w-24" />
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Good to See You Again!
            </h2>
            <p className="text-sm text-gray-500">
              Log in to update your profile, explore new opportunities, and stay
              in the spotlight.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email ID*"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C26C8E]"
            />
            <input
              type="password"
              placeholder="Password*"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C26C8E]"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#C26C8E] to-[#D1779A] text-white py-2 rounded hover:opacity-90 transition"
            >
              LOG IN
            </button>

            <button className="flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition">
              <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/register" className="text-[#8B3E66] font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
