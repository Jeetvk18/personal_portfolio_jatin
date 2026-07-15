import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import {
  FiSend,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero container" id="home">

      {/* ===== SOCIAL ===== */}

      <motion.div
        className="hero-social"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <a
          href="https://linkedin.com/in/jatin-prajapat-181b82307"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/Jeetvk18"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* ===== CONTENT ===== */}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <span className="hero-badge">
          🚀 Available for Internship
        </span>

        <h1>
          Hi I'm <br />
          <span>Jatin Prajapat</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Machine Learning Learner",
            2000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Passionate Full Stack Developer focused on
          building modern web applications using
          React, Node.js, Express.js and MongoDB.

          I love solving real-world problems,
          creating beautiful UI and exploring
          Artificial Intelligence.
        </p>

        <div className="hero-buttons">

          <a
            href="#contact"
            className="hero-btn primary-btn"
          >
            Contact Me
            <FiSend />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-btn secondary-btn"
          >
            Resume
            <FiDownload />
          </a>

        </div>

      </motion.div>

      {/* ===== IMAGE ===== */}

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >

        <div className="hero-blob">

          <img
            src="/profile.png"
            alt="Jatin Prajapat"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;