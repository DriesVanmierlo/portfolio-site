import React, { useEffect, useState } from "react";
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
import Menu from "../components/Menu";
import What from "../components/What";
import Promo from "../components/Promo";

export default function Landing() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      function (event) {
        setScreenWidth(this.window.innerWidth);
      },
      true
    );
  });

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
        {screenWidth >= 768 && <Menu />}
        <What />
        <Explainer />
        <Promo />
        <FAQ />
        <Why />
        <About />
        <Footer />
      </div>
    </>
  );
}
