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
        <Subtitle>In samenwerking met:</Subtitle>
        <figure className="partner-figure">
          <img className="partner-image" src={logoJEZ} alt="Dries Vanmierlo" />
        </figure>
      </ContentView>
      <div className="footer-container">
        <ContentView>
          <figure className="footer-figure">
            <img
              className="footer-image"
              src={savemeLogo}
              alt="Dries Vanmierlo"
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
              >
                <InstagramLogo size={24} />
              </a>
            </div>
          </div>
        </ContentView>
      </div>
    </div>
  );
}

export default Footer;
