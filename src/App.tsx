import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import { Analytics } from '@vercel/analytics/react';

function App() {
  

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
