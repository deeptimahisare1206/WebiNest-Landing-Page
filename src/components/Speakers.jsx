import React from "react";
import Cards from "./Cards";
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
    <div>
      <section id="speakers" className="py-16">
        <Container maxWidth="lg">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Meet the Speakers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((speaker) => (
              <div
                // key={i}
                className="bg-white p-2 rounded-xl shadow text-center"
              >
                {/* <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" /> */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />

                <h3 className="font-semibold">{speaker.name}</h3>

                <p className="text-sm text-gray-600">{speaker.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Speakers;
