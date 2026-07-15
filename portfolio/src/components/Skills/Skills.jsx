import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const frontend = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
];

const backend = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
];

const programming = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaGitAlt />, name: "Git & GitHub" },
];

function Skills() {
  return (
    <section className="skills section" id="skills">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <h2 className="section-title">
            Skills
          </h2>

          <span className="section-subtitle">
            Technologies I Work With
          </span>

        </motion.div>

        <div className="skills-container">

          {/* FRONTEND */}

          <motion.div
            className="skills-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <h3>Frontend</h3>

            {frontend.map((skill, index) => (

              <div className="skill-item" key={index}>

                <div className="skill-left">

                  {skill.icon}

                  <span>{skill.name}</span>

                </div>

              </div>

            ))}

          </motion.div>

          {/* BACKEND */}

          <motion.div
            className="skills-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3>Backend</h3>

            {backend.map((skill, index) => (

              <div className="skill-item" key={index}>

                <div className="skill-left">

                  {skill.icon}

                  <span>{skill.name}</span>

                </div>

              </div>

            ))}

          </motion.div>

          {/* PROGRAMMING */}

          <motion.div
            className="skills-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
          >

            <h3>Programming</h3>

            {programming.map((skill, index) => (

              <div className="skill-item" key={index}>

                <div className="skill-left">

                  {skill.icon}

                  <span>{skill.name}</span>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Skills;