import React from "react";
import "../styles/landing.css";
import Banner from "../components/Banner";
import ContentView from "../components/ContentView";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Explainer from "../components/Explainer";
import FAQ from "../components/FAQ";
import Why from "../components/Why";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

export default function Landing() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SaveMe app | Dries Vanmierlo</title>
        <link rel="canonical" href="/saveme" />
      </Helmet>
      <div className="container">
        <Header />
        <Banner />
        <div className="content-container">
          <ContentView className="section">
            <Title id="wat-is-saveme">Wat is SaveMe?</Title>
            <Paragraph>
              SaveMe is een app waarmee je een stil alarm kan uitsturen naar
              vrienden wanneer je seksueel lastig gevallen wordt. Deze vrienden
              zullen je alarm zien verschijnen en kunnen je locatie volgen. Op
              deze manier kunnen zij subtiel je uit de onvielige situatie
              redden.
            </Paragraph>
          </ContentView>
        </div>
        <Explainer />
        <FAQ />
        <Why />
        <About />
        <Footer />
      </div>
    </>
  );
}
