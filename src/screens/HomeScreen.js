import React from "react";
import Header from "../components/header/Header";
import BannerScreen from "./BannerScreen";
import AboutScreen from "./AboutScreen";
import ServicesScreen from "./ServicesScreen";
import PortfolioScreen from "./PortfolioScreen";
import ContactScreen from "./ContactScreen";
import "./styles/homeScreen.css";
import SaveMeButton from "../components/saveme-button/SaveMeButton";

function HomeScreen() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className="banner-screen" />
      <AboutScreen />
      <ServicesScreen />
      <PortfolioScreen />
      <ContactScreen />
      <SaveMeButton />
    </div>
  );
}

export default HomeScreen;
