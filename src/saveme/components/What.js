import React from "react";
import ContentView from "./ContentView";
import Title from "./Title";
import Paragraph from "./Paragraph";

function What() {
  return (
    <div className="content-container" id="wat-is-saveme">
      <ContentView className="section what-container">
        <div>
          <Title>Wat is SaveMe?</Title>
          <Paragraph>
            SaveMe is een app waarmee je een stil alarm kan uitsturen naar
            vrienden wanneer je seksueel lastig gevallen wordt. Deze vrienden
            zullen je alarm zien verschijnen en kunnen je locatie volgen. Op
            deze manier kunnen zij subtiel je uit de onvielige situatie redden.
          </Paragraph>
        </div>
        <figure className="what-figure">
          <img
            className="what-image"
            src="https://i.ibb.co/DLtrkSt/saveme-landing-mockup.png"
            alt="SaveMe app mockup"
          />
        </figure>
      </ContentView>
    </div>
  );
}

export default What;
