import React from "react";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <div className="h-16 bg-gray w-screen">
      <div className="h-full w-16 p-2 ml-4 flex flex-row items-center gap-8">
        <img src={logo} alt="Regex Trainer Logo" className="invert" />
        <p className="text-white text-2xl font-poppins">RegexTrainer</p>
        <a
          href="https://github.com/Xylight0"
          className="float-right absolute right-10 text-custom-blue font-poppins hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          by Xylight0
        </a>
      </div>
    </div>
  );
}
