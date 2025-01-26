import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#EDF9FD] min-h-screen flex justify-between items-start flex-wrap p-5">
      <button className="bg-[#FEFCE8] hover:bg-brand-100 transition-all rounded-full button h-[52px] gap-2 px-10 shadow-drop-1 flex items-center text-center font-semibold text-lg p-10">
        <Link to="https://sudamasol-admindashboard.vercel.app/" target="_blank">
          Admin Dashboard
        </Link>
      </button>
      <button className="bg-[#FEFCE8] hover:bg-brand-100 transition-all rounded-full button h-[52px] gap-2 px-10 shadow-drop-1 flex items-center text-center font-semibold text-lg p-10">
        Teacher Dashboard
      </button>
      <button className="bg-[#FEFCE8] hover:bg-brand-100 transition-all rounded-full button h-[52px] gap-2 px-10 shadow-drop-1 flex items-center text-center font-semibold text-lg p-10">
        Student Dashboard
      </button>
    </div>
  );
};

export default Login;
