import React from "react";

import RegisterPage from "./component/RegisterPage.jsx";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./component/LoginPage.jsx";
import Profile from "./component/Profile.jsx";
import Projects from "./component/Projects.jsx";
import Dashboard from "./component/Dashboard.jsx";
import TopBar from "./component/TopBar.jsx";
import OtpVerifyPage from "./component/OtpVerifyPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topbar" element={<TopBar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/otpverifypage" element={<OtpVerifyPage />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

    
  );
}

export default App;
