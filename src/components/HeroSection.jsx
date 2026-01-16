import { ArrowRight, Map, Person, CalendarMonth } from "@mui/icons-material";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden "
    >
      <div className="absolute inset-0 bg-orange-500">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">
              Next Event: March 15, 2026
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Where Ideas Meet <span className="text-gradient">Innovation</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Join world-class events and webinars featuring industry leaders,
            innovative thinkers, and transformative ideas that shape the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                backgroundColor: "oklch(95.4% 0.038 75.164)",
                color: "black",
              }}
            >
              Explore Events
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                backgroundColor: "oklch(95.4% 0.038 75.164)",
                color: "black",
              }}
            >
              Become a Speaker
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CalendarMonth className="text-accent" />
                <span className="text-3xl font-bold text-primary-foreground">
                  50+
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Annual Events
              </p>
            </div>

            <div className="text-center  bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Person className="text-accent" />
                <span className="text-3xl font-bold text-primary-foreground">
                  10K+
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60">Attendees</p>
            </div>

            <div className="text-center  bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Map className="text-accent" />
                <span className="text-3xl font-bold text-primary-foreground">
                  25+
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60">Countries</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="oklch(95.4% 0.038 75.164)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
