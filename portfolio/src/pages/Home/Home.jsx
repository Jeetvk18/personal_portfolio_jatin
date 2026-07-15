import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Background from "../../components/Background/Background";

function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    
    </>
  );
}

export default Home;