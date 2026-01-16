import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import eventdata from "../../data/data.json";
import { Expand } from "@mui/icons-material";

export default function Events() {
  const events = eventdata;

  return (
    <section id="agenda" className="bg-orange-100 py-12 md:py-20">
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
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">
                  {event.title}
                </h3>

                <table className="w-full text-sm border border-orange-200 rounded-lg overflow-hidden">
                  <tbody className="divide-y divide-orange-100">
                    <tr>
                      <td className="px-4 py-2 font-medium text-orange-800 bg-orange-50">
                        Subtitle
                      </td>
                      <td className="px-4 py-2 text-orange-700">
                        {event.subtitle}
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 font-medium text-orange-800 bg-orange-50">
                        Date
                      </td>
                      <td className="px-4 py-2 text-orange-700">
                        {event.date}
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 font-medium text-orange-800 bg-orange-50">
                        Time
                      </td>
                      <td className="px-4 py-2 text-orange-700">
                        {event.time}
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 font-medium text-orange-800 bg-orange-50">
                        Location
                      </td>
                      <td className="px-4 py-2 text-orange-700">
                        {event.location}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="">
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    boxShadow: 1,
                    borderRadius: 2,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Expand sx={{ color: "#FF6B35" }} />}
                    aria-controls={`panel-${event.id}-content`}
                    id={`panel-${event.id}-header`}
                  >
                    <Typography sx={{ fontWeight: "medium", color: "#333" }}>
                      Event Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#555" }}>
                      {event.description}
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      Price: {event.price}
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      Seats: {event.seats}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* ))} */}
              </div>
              <Button
                variant="contained"
                size="large"
                fullWidth
                href="#register"
                sx={{
                  color: "black",
                  backgroundColor: "#FF7518",
                }}
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
