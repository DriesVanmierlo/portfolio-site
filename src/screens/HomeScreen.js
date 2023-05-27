import React from "react";
import Header from "../components/header/Header";
import BannerScreen from "./BannerScreen";
import AboutScreen from "./AboutScreen";
import ServicesScreen from "./ServicesScreen";
import PortfolioScreen from "./PortfolioScreen";
import ContactScreen from "./ContactScreen";
import "./styles/homeScreen.css";

function HomeScreen() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className="banner-screen" />
      <AboutScreen />
      <ServicesScreen />
      <PortfolioScreen />
      <ContactScreen />
    </div>
  );
}

export default HomeScreen;
