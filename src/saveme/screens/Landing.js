import React from "react";
import "../styles/landing.css";
import Banner from "../components/Banner";
import ContentView from "../components/ContentView";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Explainer from "../components/Explainer";

export default function Landing() {
  return (
    <div className="container">
      <Banner />
      <ContentView className="section">
        <Title id="what-is-saveme">Wat is SaveMe?</Title>
        <Paragraph>
          SaveMe is een app waarmee je een stil alarm kan uitsturen naar
          vrienden wanneer je seksueel lastig gevallen wordt. Deze vrienden
          zullen je alarm zien verschijnen en kunnen je locatie volgen. Op deze
          manier kunnen zij subtiel je uit de onvielige situatie redden.
        </Paragraph>
      </ContentView>
      <Explainer />
    </div>
  );
}
