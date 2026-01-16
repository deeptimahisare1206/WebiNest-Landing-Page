import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqs from "../../data/faqData.json";

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-16">
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#FF6B35" }}
        >
          Frequently Asked Questions
        </Typography>

        <div className="mt-8">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              sx={{
                mb: 2,
                boxShadow: 1,
                borderRadius: 2,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FF6B35" }} />}
                aria-controls={`panel-${faq.id}-content`}
                id={`panel-${faq.id}-header`}
              >
                <Typography sx={{ fontWeight: "medium", color: "#333" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#555" }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
}
