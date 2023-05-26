import React from "react";
import ContentView from "./ContentView";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content-container">
        <figure className="saveme-banner-figure">
          <img
            className="saveme-banner-image"
            src="https://i.ibb.co/18XKQMB/saveme-promo-mockup.png"
            alt="SaveMe app landing page"
          />
        </figure>
        <div className="mockup-placeholder"></div>
        <ContentView className="banner-content">
          <h1 className="banner-title">Download de SaveMe app</h1>
          <p className="banner-text">
            Met de SaveMe app ga je veilig op stap. Stuur snel en ongemerkt een
            alarm naar je vrienden wanneer jij seksueel lastig gevallen wordt.
          </p>
          <div className="buttons-container">
            <a
              href="https://www.instagram.com/savemeappp/"
              className="button-solid"
              target="_blank"
              rel="noreferrer"
            >
              Blijf up-to-date!
            </a>
            <a href="#wat-is-saveme" className="button-outline">
              Wat is SaveMe?
            </a>
          </div>
        </ContentView>
      </div>
    </div>
  );
}

export default Banner;
