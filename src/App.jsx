import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {

    const move = (e) => {

      const glow = document.getElementById("cursor-glow");

      if(glow){

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;

      }

    };

    window.addEventListener("mousemove", move);

  }, []);

  return (

    <>

      <div
        id="cursor-glow"
        className="fixed w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </>

  );
}

export default App;