import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);
      if (val && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpComplete) {
      const otpValue = otp.join("");
      console.log("Submitting OTP:", otpValue);
      setOtp(["", "", "", "", "", ""]);
      navigate("/dashboard"); // Navigate after successful OTP verify
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    document.getElementById(`otp-0`).focus();
    alert("A new OTP has been sent!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <h2 className="text-center text-xl font-semibold mb-4 text-[#8B3E66]">
          Enter OTP
        </h2>
        <p className="text-center mb-6 text-sm text-gray-600">
          We've sent a 6-digit OTP to your registered phone number.
        </p>

        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-10 h-10 border border-gray-300 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-[#8B3E66]"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={!isOtpComplete}
            className={`bg-gradient-to-r from-[#8B3E66] to-[#A85574] text-white py-2 px-6 rounded transition ${
              isOtpComplete ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
            }`}
          >
            Verify OTP
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleResend}
            className="text-[#8B3E66] hover:underline text-sm"
          >
            Resend OTP
          </button>
        </div>

        {/* ✅ Back to Login options */}
        <div className="text-center mt-6 flex flex-col gap-2 items-center">
          <p className="text-center text-sm">
            Or back to{" "}
            <Link to="/login" className="text-[#8B3E66] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
