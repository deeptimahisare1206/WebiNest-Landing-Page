import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";

import {
  TextField,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/* ================== VALIDATION SCHEMA ================== */
const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  date: yup.date().required("Date is required"),
  time: yup.date().required("Time is required"),
});

function EventLandingPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: dayjs(),
      time: dayjs(),
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <Container maxWidth="lg">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-bold text-lg text-blue-600">
              DevConnect Live
            </h1>
            <div className="space-x-6 text-sm font-medium">
              <a href="#speakers" className="hover:text-blue-600">Speakers</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#register" className="hover:text-blue-600">Register</a>
            </div>
          </div>
        </Container>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <Container maxWidth="lg">
          <h2 className="text-4xl font-bold mb-4">
            DevConnect Live 2026
          </h2>
          <p className="text-lg mb-4">
            Live webinar on React, Backend & System Design
          </p>
          <p className="text-sm opacity-90">
            📅 25 March 2026 | ⏰ 7:00 PM IST | 🌐 Online
          </p>
        </Container>
      </section>

      {/* ================= SPEAKERS ================= */}
      <section id="speakers" className="py-16">
        <Container maxWidth="lg">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Meet the Speakers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["React Expert", "Backend Architect", "Tech Lead"].map(
              (role, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow text-center"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* ================= EVENT INFO ================= */}
      <section id="about" className="py-16 bg-gray-100">
        <Container maxWidth="lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Event Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              🚀 Latest Industry Trends
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              💻 Live Coding Sessions
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              🎓 Career & Interview Guidance
            </div>
          </div>
        </Container>
      </section>

      {/* ================= REGISTRATION FORM ================= */}
      <section id="register" className="py-20">
        <Container maxWidth="sm">
          <Card className="shadow-xl rounded-xl">
            <CardContent>
              <h2 className="text-xl font-semibold mb-6 text-center">
                Register for the Event
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      fullWidth
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email Address"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Select Date"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: !!errors.date,
                            helperText: errors.date?.message,
                          },
                        }}
                      />
                    )}
                  />

                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        {...field}
                        label="Select Time"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: !!errors.time,
                            helperText: errors.time?.message,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  className="!bg-blue-600 hover:!bg-blue-700"
                >
                  Register Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p className="text-sm">
          © 2026 DevConnect Live | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default EventLandingPage;
