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
    <section id="register" className="">
      <Container maxWidth="sm">
        <Card className="shadow-xl rounded-xl">
          <CardContent>
            <h2 className="text-xl font-semibold mb-6 text-center">
              Register for the Event
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-4 flex flex-col"
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
                className="bg-blue-600 hover:bg-blue-700"
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
