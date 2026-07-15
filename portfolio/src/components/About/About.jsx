import "./About.css";
import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserGraduate,
  FaCheckCircle,
  FaFilePdf,
  FaSchool,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            About Me
          </h2>

          <span className="section-subtitle">
            My Introduction
          </span>

        </motion.div>

        <div className="about-container">

         {/*================ LEFT =================*/}

<motion.div
  className="about-left"
  initial={{ opacity: 0, x: -70 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
>

  <div className="about-profile-card">

    <img
      src="/profile.png"
      alt="Jatin Prajapat"
    />

    <h3>Jatin Prajapat</h3>

    <span>
      Full Stack Developer
    </span>

    <div className="profile-divider"></div>

    <h4 className="education-title">

      <FaGraduationCap />

      Education

    </h4>

    <div className="education-item">

      <FaUserGraduate />

      <div>

        <h5>
          B.Tech CSE
        </h5>

        <p>
          Parul University
        </p>

        <span>
          2023 - 2027 | CGPA : 7.12
        </span>

      </div>

    </div>

    <div className="education-item">

      <FaSchool />

      <div>

        <h5>
          Higher Secondary
        </h5>

        <p>
          RBSE Board
        </p>

        <span>
          63.20%
        </span>

      </div>

    </div>

    <div className="education-item">

      <FaSchool />

      <div>

        <h5>
          Secondary
        </h5>

        <p>
          RBSE Board
        </p>

        <span>
          91%
        </span>

      </div>

    </div>

  </div>

</motion.div>

          {/*================ RIGHT =================*/}

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="about-description">

              I'm <strong>Jatin Prajapat</strong>, a
              passionate Full Stack Developer currently
              pursuing B.Tech Computer Science &
              Engineering at <strong>Parul University</strong>.

              <br /><br />

              I enjoy creating responsive web
              applications using React, Node.js,
              Express.js and MongoDB while continuously
              improving my development skills through
              practical projects.

              <br /><br />

              Alongside Web Development, I'm exploring
              Artificial Intelligence and Machine
              Learning to build smarter and more useful
              applications.

            </p>

            {/*========== INFO =========*/}

<div className="about-info">

  <div className="about-info-card">

    <FaUserGraduate />

    <h3>Final Year</h3>

    <span>Student</span>

  </div>

  <div className="about-info-card">

    <FaLaptopCode />

    <h3>3+</h3>

    <span>Projects</span>

  </div>

  <div className="about-info-card">

    <FaGraduationCap />

    <h3>2027</h3>

    <span>Graduation</span>

  </div>

</div>

{/*========== HIGHLIGHTS =========*/}

<div className="highlights">

  <h4>
    Quick Highlights
  </h4>

  <div className="highlight-grid">

    <div className="highlight-card">

      <FaCheckCircle />

      <span>Full Stack Development</span>

    </div>

    <div className="highlight-card">

      <FaCheckCircle />

      <span>React & MERN Stack</span>

    </div>

    <div className="highlight-card">

      <FaCheckCircle />

      <span>AI & Machine Learning</span>

    </div>

    <div className="highlight-card">

      <FaCheckCircle />

      <span>Problem Solving</span>

    </div>

  </div>

</div>

<a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="resume-button"
>

  <FaFilePdf />

  View Resume

</a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;