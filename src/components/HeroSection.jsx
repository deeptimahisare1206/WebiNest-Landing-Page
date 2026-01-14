import React from "react";
import heroimage from "../assets/heroimage.png";
import Countdown from "./Countdown";

function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-end">
      <section id="home">
        <div className=" flex p-8 bg-[#113f67]">
          <div className="flex flex-1 flex-col justify-center">
            <span className="text-sm text-teal-600 font-semibold">
              Live Webinar
            </span>

            <h1 className="mt-4 text-4xl font-bold text-white">
              DevConnect Live 2026
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Join industry experts for an in-depth session on modern web and
              backend development best practices.
            </p>

            <p className="mt-4 text-gray-700 font-medium">
              <span className="font-semibold">Date:</span> 12 February 2026
              &nbsp;|&nbsp;
              <span className="font-semibold">Time:</span> 6:00 PM IST
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-teal-600 text-white ">
                Save My Seat
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <img
              src={heroimage}
              alt="Webinar illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Countdown targetDate="2026-01-12T18:00:00" />
    </div>
  );
}

export default HeroSection;
