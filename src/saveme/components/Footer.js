import React from "react";
import ContentView from "./ContentView";
import Subtitle from "./Subtitle";
import logoJEZ from "../assets/images/logo_JEZ.png";
import savemeLogo from "../assets/logo/SaveMe-Logo-with-text-white.png";
import { InstagramLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="section footer-section">
      <ContentView className="partner-section">
        <div className="content-container">
          <Subtitle>In samenwerking met:</Subtitle>
          <a
            href="https://www.jezofficial.be/"
            target="_blank"
            rel="noreferrer"
          >
            <figure className="partner-figure">
              <img className="partner-image" src={logoJEZ} alt="JEZ! logo" />
            </figure>
          </a>
        </div>
      </ContentView>
      <div className="footer-container">
        <div className="content-container">
          <ContentView className="saveme-footer-container">
            <figure className="footer-figure">
              <img
                className="footer-image"
                src={savemeLogo}
                alt="SaveMe logo"
              />
            </figure>
            <div className="footer-links-container">
              <div className="footer-link-section">
                <a href="#" className="footer-link">
                  Download de app
                </a>
                <a href="#veelgestelde-vragen" className="footer-link">
                  Veelgestelde vragen
                </a>
                <a href="#over-saveme" className="footer-link">
                  Over SaveMe
                </a>
              </div>
              <div className="footer-link-section">
                <a
                  href="https://driesvanmierlo.be/#contact"
                  className="footer-link"
                >
                  Contact
                </a>
                <a
                  href="https://www.instagram.com/savemeappp/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={24} />
                </a>
              </div>
            </div>
          </ContentView>
          <div className="saveme-copyright-disclaimer">
            &copy; 2023 <a href="https://driesvanmierlo.be/">Dries Vanmierlo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
