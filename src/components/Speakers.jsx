import React from "react";
import s1 from "../assets/R4.jpg";
import s2 from "../assets/R5.jpg";
import s3 from "../assets/R6.jpg";
import { Container } from "@mui/material";

function Speakers() {
  const speakers = [
    { name: "John Doe", role: "React Expert", image: s1 },
    { name: "Jane Smith", role: "Backend Architect", image: s2 },
    { name: "Mike Johnson", role: "Tech Lead", image: s3 },
    { name: "Sarah Wilson", role: "DevOps Specialist", image: s1 },
    { name: "David Brown", role: "Full Stack Developer", image: s2 },
  ];

  return (
    <section id="speakers" className="py-16 bg-gray-50">
      <Container maxWidth="lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Meet the Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600">{speaker.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Speakers;
