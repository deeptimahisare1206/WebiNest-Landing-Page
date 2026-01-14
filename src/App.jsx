import Agenda from "./components/Events";
import EventLandingPage from "./components/EventLandingPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Speakers from "./components/Speakers";
import FAQ from "./components/Faq";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        {/* <EventLandingPage /> */}
        <Agenda />
        <Speakers />
        <Register />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
