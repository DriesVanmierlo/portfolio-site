import React, { useState } from "react";
import "./savemeButton.css";
import logo from "../../saveme/assets/logo/SaveMe-Logo.svg";
import { X } from "@phosphor-icons/react";

function SaveMeButton() {
  const [showButton, setShowButton] = useState(true);
  return (
    <>
      {showButton && (
        <div className="saveme-button-home">
          <a
            href="https://driesvanmierlo.be/saveme"
            className="saveme-button-link"
          >
            <figure className="savme-button-home-figure">
              <img
                className="savme-button-home-image"
                src={logo}
                alt="SaveMe app logo"
              />
            </figure>
            <p>Ga naar SaveMe website</p>
          </a>
          <div
            onClick={() => setShowButton(false)}
            className="close-saveme-button-home"
          >
            <X size={24} />
          </div>
        </div>
      )}
    </>
  );
}

export default SaveMeButton;
