import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button, Card, CardContent, Container } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="register" className="bg-orange-50 py-16">
      <Container maxWidth="sm">
        <Card className="shadow-2xl rounded-2xl border-t-4 border-orange-500 overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-orange-800">
              Register for the Event
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
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
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Register Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export default Register;
