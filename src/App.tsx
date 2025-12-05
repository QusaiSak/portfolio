import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

    </>
  );
}

export default App;
