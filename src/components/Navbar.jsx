import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="main flex shadow-lg fixed top-0 left-0 right-0 z-999 bg-white">
        <div className="logo flex-1">
          <img src={logo} alt="Hero" className="h-24" />
        </div>
        <div className="flex flex-2 gap-6 items-center justify-end px-6 py-4">
          <a href="#home" className="text-xl text-black no-underline">
            Home
          </a>
          <a href="" className="text-xl text-black no-underline">
            Agenda
          </a>
          <a href="" className="text-xl text-black no-underline">
            Speakers
          </a>
          <a href="" className="text-xl text-black no-underline">
            Register
          </a>
          <a href="" className="text-xl text-black no-underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
