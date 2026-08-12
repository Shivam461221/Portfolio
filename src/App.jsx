import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Training from "./components/sections/Training";
import Experience from "./components/sections/Experience";
import WhyMe from "./components/sections/WhyMe";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-[2px] bg-signal-cyan z-[60] transition-[width]" style={{ width: `${progress}%` }} />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-base font-body overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Training />
        <Experience />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
