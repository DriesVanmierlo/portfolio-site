import React from "react";
import ContentView from "./ContentView";

function Menu() {
  return (
    <div className="section content-container">
      <ContentView className="">
        <nav className="menu-container">
          <a className="menu-link" href="#hoe-werkt-de-app">
            Hoe de app werkt
          </a>
          <a className="menu-link" href="#veelgestelde-vragen">
            Veelgestelde vragen
          </a>
          <a className="menu-link" href="#over-saveme">
            Over de app
          </a>
        </nav>
      </ContentView>
    </div>
  );
}

export default Menu;
