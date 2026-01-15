import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#FF6B35", color: "#fff", mt: 1, py: 2 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              WebiNest
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffe6d1" }}>
              Seamless event & webinar registrations. Join, learn, and connect
              with experts worldwide.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#home" underline="hover" sx={{ color: "#fff" }}>
                Home
              </Link>
              <Link href="#agenda" underline="hover" sx={{ color: "#fff" }}>
                Agenda
              </Link>
              <Link href="#speakers" underline="hover" sx={{ color: "#fff" }}>
                Speakers
              </Link>
              <Link href="#register" underline="hover" sx={{ color: "#fff" }}>
                Register
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2">Email: support@eventzen.com</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Phone: +91 98765 43210
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                LinkedIn
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                Twitter
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                YouTube
              </Link>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 2,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.3)",
            color: "#ffe6d1",
          }}
        >
          © 2026 EventZen. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
