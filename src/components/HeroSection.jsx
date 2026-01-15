import React from "react";
import heroimage from "../assets/heroimage.png";
import Countdown from "./Countdown";

function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="home"
        className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 p-6 md:p-12"
      >
        <div className="flex flex-1 flex-col justify-center text-center md:text-left">
          <span className="text-sm text-orange-200 font-semibold tracking-wide">
            Live Webinar
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            DevConnect Live 2026
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-orange-100 max-w-xl">
            Join industry experts for an in-depth session on modern web and
            backend development best practices.
          </p>

          <p className="mt-4 text-orange-200 font-medium text-sm sm:text-base">
            <span className="font-semibold text-white">Date:</span> 12 February
            2026 &nbsp;|&nbsp;
            <span className="font-semibold text-white">Time:</span> 6:00 PM IST
          </p>

          <div className="mt-6 sm:mt-8">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition">
              Save My Seat
            </button>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center mt-8 md:mt-0">
          <img
            src={heroimage}
            alt="Webinar illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </section>

      <Countdown targetDate="2026-01-12T18:00:00" />
    </div>
  );
}

export default HeroSection;
