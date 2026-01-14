import React from "react";
import Cards from "./Cards";
import pic from "../assets/heroimage.png";

function Events() {
  const events = [
    {
      Topic: "Introduction & Welcome",
      Time: "6:00 PM – 6:15 PM",
      image: pic,
    },
    {
      Topic: "Modern Web Development",
      Time: "6:15 PM – 7:00 PM",
    },
    {
      Topic: "Q&A Session",
      Time: "7:00 PM – 7:30 PM",
    },
  ];
  return (
    <div>
      <section className="text-center p-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Upcoming Events
        </h2>

        <div className="flex gap-5">
          {events.map((event) => (
            <Cards Topic={event.Topic} Time={event.Time} image={event.image} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
