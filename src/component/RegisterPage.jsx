import React from "react";
import camera from "../assets/157.png";
import logo from "../assets/158.png";
import googleLogo from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 bg-[#8B3E66] items-center justify-center p-8">
          <img
            src={camera}
            alt="Register Illustration"
            className="w-3/4 max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" className="mx-auto mb-2 w-20 md:w-24" />
            <h2 className="text-lg md:text-xl font-semibold">
              "Ready for the Big Break? Let's Begin!"
            </h2>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              required
            />
            <select
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              required
            >
              <option value="">Profile Type</option>
              <option value="Actor">Actor</option>
              <option value="Director">Director</option>
              <option value="Producer">Producer</option>
            </select>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#8B3E66] to-[#A85574] text-white py-2 rounded hover:opacity-90 transition"
            >
              REGISTER
            </button>

            <button
              type="button"
              className="flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition"
            >
              <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8B3E66] font-semibold">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
