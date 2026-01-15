import Agenda from "./components/Events";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Speakers from "./components/Speakers";
import FAQ from "./components/Faq";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <HeroSection />
        <Agenda />
        <Speakers />
        <Register />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
