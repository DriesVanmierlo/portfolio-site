import { InstagramLogo } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo/SaveMe-Logo.svg";

function Header() {
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

  function closeMenu() {
    document.getElementById("saveme-menu__toggle").checked = false;
  }

  return (
    <header className="saveme-header">
      <figure className="saveme-header-figure">
        <img className="saveme-header-image" src={logo} alt="SaveMe app logo" />
      </figure>
      {screenWidth < 768 && (
        <div className="menu-container">
          <div className="hamburger-menu">
            <input id="saveme-menu__toggle" type="checkbox" />
            <label className="saveme-menu__btn" for="saveme-menu__toggle">
              <span></span>
            </label>

            <nav className="saveme-menu__box" onClick={closeMenu}>
              <a
                exact
                activeClassName="saveme-menu__item-active"
                className="saveme-menu__item"
                href="#wat-is-saveme"
              >
                Wat is SaveMe?
              </a>
              <a className="saveme-menu__item" href="#hoe-werkt-de-app">
                Hoe de app werkt
              </a>
              <a className="saveme-menu__item" href="#veelgestelde-vragen">
                Veelgestelde vragen
              </a>
              <a className="saveme-menu__item" href="#over-saveme">
                Over de app
              </a>
              <a
                className="saveme-menu__item"
                href="https://driesvanmierlo.be/#contact"
              >
                Contact
              </a>
              <div className="saveme-menu__socials_container">
                <li>
                  <a
                    target="_blank"
                    className="saveme-menu__item"
                    href="https://www.instagram.com/savemeappp/"
                    rel="noreferrer"
                  >
                    <InstagramLogo size={28} />
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
