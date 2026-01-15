import React from "react";
import Cards from "./Cards";
import pic from "../assets/heroimage.png";

function Events() {
  const events = [
    { Topic: "Introduction & Welcome", Time: "6:00 PM – 6:15 PM", image: pic },
    { Topic: "Modern Web Development", Time: "6:15 PM – 7:00 PM", image: pic },
    { Topic: "Q&A Session", Time: "7:00 PM – 7:30 PM", image: pic },
    { Topic: "Q&A Session", Time: "7:00 PM – 7:30 PM", image: pic },
  ];

  return (
    <section className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800">
            Event Agenda
          </h2>
          <p className="mt-3 text-orange-600 text-base md:text-lg">
            A quick overview of what we’ll cover during the session
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={event.image}
                alt={event.Topic}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  {event.Topic}
                </h3>
                <p className="text-orange-600">{event.Time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
