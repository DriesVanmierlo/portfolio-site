import React, { useEffect } from "react";
import SectionTitle from "../components/section-title/SectionTitle";
import "./styles/contactScreen.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContactScreen() {
  const { ref, inView } = useInView();
  const animationInfo = useAnimation();
  const animationForm = useAnimation();

  useEffect(() => {
    if (inView) {
      animationInfo.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: 0.5,
        },
      });
      animationForm.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: 0.7,
        },
      });
    }
    if (!inView) {
      animationInfo.start({
        x: -25,
        opacity: 0,
      });
      animationForm.start({
        x: -25,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div id="contact" className="contact-screen-container">
      {/* <BackgroundImage image={background_placeholder} opacity={0.7} /> */}
      <div ref={ref} className="contact-content-container">
        <SectionTitle title="Contact" />
        <motion.h2
          animate={animationInfo}
          className="contact-information-title"
        >
          Contact information
        </motion.h2>
        <motion.p animate={animationInfo} className="contact-email">
          dries.vanmierlo@telenet.be
        </motion.p>
        <motion.p animate={animationInfo} className="contact-phone">
          +32 470 63 75 28
        </motion.p>
        <motion.div
          animate={animationInfo}
          className="contact-socials-container"
        >
          <a
            target="_blank"
            className="contact-social-icon"
            href="https://www.instagram.com/vanmierlodries/"
            rel="noreferrer"
          >
            <span className="icon-instagram"></span>
          </a>
          <a
            target="_blank"
            className="contact-social-icon"
            href="https://www.facebook.com/dries.vanmierlo.94"
            rel="noreferrer"
          >
            <span className="icon-facebook"></span>
          </a>
          <a
            target="_blank"
            className="contact-social-icon"
            href="https://www.linkedin.com/in/dries-vanmierlo"
            rel="noreferrer"
          >
            <span className="icon-linkedin"></span>
          </a>
        </motion.div>
        <motion.form
          animate={animationForm}
          id="contact-form"
          action="https://formsubmit.co/64ae6bbefa203737663636a84ed31981"
          method="POST"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value={false} />
          <input
            type="hidden"
            name="_next"
            value="https://www.driesvanmierlo.be/#contact"
          />
          {/* {submitted && <div>Message send succesfully, you will hear from me is a short time!</div>} */}
          <div className="contact-form-row">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input required type="text" id="name" name="name" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input required type="text" id="email" name="email" />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="input-container">
              <label htmlFor="subject">Subject</label>
              <input required type="text" id="subject" name="subject" />
            </div>
          </div>
          <div className="message-container input-container">
            <label htmlFor="message">Message</label>
            <textarea
              className="contact-message"
              rows={4}
              required
              type="text"
              id="message"
              name="message"
            />
          </div>
          <button className="white-button" id="contact-submit">
            Send{" "}
            <span className="icon-right_arrow_big_icon icon-contact"></span>
          </button>
        </motion.form>
      </div>
      <div className="copyright-disclaimer">
        &copy; 2023 <a href="#">Dries Vanmierlo</a>
      </div>
    </div>
  );
}

export default ContactScreen;
