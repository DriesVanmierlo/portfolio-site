import React from "react";
import ContentView from "./ContentView";

function Banner() {
  return (
    <div className="banner-container">
      <figure className="saveme-banner-figure">
        <img
          className="saveme-banner-image"
          src="https://i.ibb.co/18XKQMB/saveme-promo-mockup.png"
          alt="SaveMe app landing page"
        />
      </figure>
      <ContentView>
        <div className="banner-content">
          <h1 className="banner-title">Download de SaveMe app</h1>
          <p className="banner-text">
            Met de SaveMe app ga je veilig op stap. Stuur snel en ongemerkt een
            alarm naar je vrienden wanneer jij je onveilig voelt.
          </p>
          <div className="buttons-container">
            <a href="#" className="button-solid">
              Download de app
            </a>
            <a href="#wat-is-saveme" className="button-outline">
              Wat is SaveMe?
            </a>
          </div>
        </div>
      </ContentView>
    </div>
  );
}

export default Banner;
