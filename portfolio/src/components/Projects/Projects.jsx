import "./Projects.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "MindSpend AI",
    featured: true,
    description:
      "AI-powered personal finance tracker with expense analysis, smart budgeting and spending insights.",
    video: "/videos/mindspend.mp4",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Jeetvk18/MindSpend_AI",
    demo: "#",
  },

  {
    id: 2,
    title: "Fake News Detector",
    featured: false,
    description:
      "Machine Learning application that detects fake news using NLP and classification models.",
    video: "/videos/fake-news.mp4",
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/Jeetvk18/AI_FAKE_NEWS_DETECTION",
    demo: "https://fake-news-detector-8djq.onrender.com/",
  },

  {
    id: 3,
    title: "Student Management System",
    featured: false,
    description:
      "Full Stack MERN application for managing student records with complete CRUD operations.",
    video: "/videos/student-management.mp4",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/Jeetvk18/Student_Management_System",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <h2 className="section-title">
            Projects
          </h2>

          <span className="section-subtitle">
            Featured Work
          </span>
        </motion.div>

        <div className="projects-container">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
            >

              <div className="project-image">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src={project.video}
                    type="video/mp4"
                  />
                </video>

                {project.featured && (

                  <div className="featured">

                    <FaStar />

                    Featured

                  </div>

                )}

              </div>

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;