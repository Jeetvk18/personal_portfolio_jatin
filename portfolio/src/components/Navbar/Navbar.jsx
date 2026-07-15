import "./Navbar.css";
import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";

function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "#home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = "#" + section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav">

        <a
          href="#home"
          className={active === "#home" ? "active" : ""}
        >
          <FiHome />
        </a>

        <a
          href="#about"
          className={active === "#about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "#skills" ? "active" : ""}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "#projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === "#contact" ? "active" : ""}
        >
          Contact
        </a>

      </nav>
    </header>
  );
}

export default Navbar;