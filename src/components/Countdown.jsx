import React, { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        completed: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      completed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  //

  return (
    <>
      <section id="countdown" className="py-10 ">
        <div className=" mx-auto text-center">
          <div className="flex justify-center gap-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Event Starts In
            </h3>

            <span className="block text-3xl font-bold text-teal-600">
              <TimeBox label="Days" value={timeLeft.days} />
            </span>
            <span className="block text-3xl font-bold text-teal-600">
              <TimeBox label="Hours" value={timeLeft.hours} />
            </span>
            <span className="block text-3xl font-bold text-teal-600">
              <TimeBox label="Minutes" value={timeLeft.minutes} />
            </span>
            <span className="block text-3xl font-bold text-teal-600">
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </span>
          </div>
        </div>
      </section>
    </>
    // <div className="flex gap-4 text-center">

    //   <TimeBox label="Days" value={timeLeft.days} />
    //   <TimeBox label="Hours" value={timeLeft.hours} />
    //   <TimeBox label="Minutes" value={timeLeft.minutes} />
    //   <TimeBox label="Seconds" value={timeLeft.seconds} />
    // </div>
  );
}

const TimeBox = ({ value, label }) => (
  <div className="px-4 py-2 rounded-lg">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);

export default Countdown;
