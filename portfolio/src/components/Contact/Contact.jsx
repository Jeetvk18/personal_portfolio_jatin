import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const res = await axios.post(
        "https://personal-portfolio-jatin.onrender.com/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name:"",
        email:"",
        subject:"",
        message:"",
      });

    }catch(err){

      alert("Failed to send message.");

      console.log(err);

    }

  };

  return (

    <section
      className="contact section"
      id="contact"
    >

      <div className="container">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
        >

          <h2 className="section-title">
            Contact Me
          </h2>

          <span className="section-subtitle">
            Let's Build Something Amazing
          </span>

        </motion.div>

        <div className="contact-container">

          {/*================ LEFT =================*/}

          <motion.div

            className="contact-info"

            initial={{opacity:0,x:-60}}

            whileInView={{opacity:1,x:0}}

            viewport={{once:true}}

            transition={{duration:.7}}

          >

            <h3>
              Get In Touch
            </h3>

            <p>

              I'm always open to discussing
              internships, projects,
              collaborations or new opportunities.

            </p>

            <div className="contact-item">

              <FaEnvelope/>

              <div>

                <h4>Email</h4>

                <a href="mailto:prajapatj969@gmail.com">

                  prajapatj969@gmail.com

                </a>

              </div>

            </div>

            <div className="contact-item">

              <FaPhoneAlt/>

              <div>

                <h4>Phone</h4>

                <a href="tel:+910000000000">

                  +91 XXXXX XXXXX

                </a>

              </div>

            </div>

            <div className="contact-item">

              <FaMapMarkerAlt/>

              <div>

                <h4>Location</h4>

                <span>

                  Rajasthan, India

                </span>

              </div>

            </div>

            <div className="contact-social">

              <a

                href="https://github.com/Jeetvk18"

                target="_blank"

                rel="noreferrer"

              >

                <FaGithub/>

              </a>

              <a

                href="https://linkedin.com/in/jatin-prajapat-181b82307"

                target="_blank"

                rel="noreferrer"

              >

                <FaLinkedin/>

              </a>

            </div>

          </motion.div>

          {/*================ FORM =================*/}

          <motion.form

            className="contact-form"

            onSubmit={handleSubmit}

            initial={{opacity:0,x:60}}

            whileInView={{opacity:1,x:0}}

            viewport={{once:true}}

            transition={{duration:.7}}

          >

            <div className="input-row">

              <input

                type="text"

                name="name"

                placeholder="Your Name"

                value={formData.name}

                onChange={handleChange}

                required

              />

              <input

                type="email"

                name="email"

                placeholder="Your Email"

                value={formData.email}

                onChange={handleChange}

                required

              />

            </div>

            <input

              type="text"

              name="subject"

              placeholder="Subject"

              value={formData.subject}

              onChange={handleChange}

              required

            />

            <textarea

              rows="7"

              name="message"

              placeholder="Write your message..."

              value={formData.message}

              onChange={handleChange}

              required

            />

            <button
              type="submit"
              className="send-btn"
            >

              Send Message

              <FaPaperPlane/>

            </button>

          </motion.form>

        </div>

      </div>

    </section>

  );

}

export default Contact;