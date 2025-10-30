import Navbar from "../components/navbar";
import Services from "./Services";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

import Features from "../components/Features";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
