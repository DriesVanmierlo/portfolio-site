import { InstagramLogo } from "@phosphor-icons/react";
import React from "react";
import logo from "../assets/logo/SaveMe-Logo.svg";

function Header() {
  function closeMenu() {
    document.getElementById("menu__toggle").checked = false;
  }
  return (
    <header className="header">
      <figure className="header-figure">
        <img className="header-image" src={logo} alt="Dries Vanmierlo logo" />
      </figure>
      <div className="menu-container">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <nav className="menu__box" onClick={closeMenu}>
            <a
              exact
              activeClassName="menu__item-active"
              className="menu__item"
              href="#wat-is-saveme"
            >
              Wat is SaveMe?
            </a>
            <a className="menu__item" href="#hoe-werkt-de-app">
              Hoe de app werkt
            </a>
            <a className="menu__item" href="#veelgestelde-vragen">
              Veelgestelde vragen
            </a>
            <a className="menu__item" href="#over-saveme">
              Over de app
            </a>
            <a className="menu__item" href="https://driesvanmierlo.be/#contact">
              Contact
            </a>
            <div className="menu__socials_container">
              <li>
                <a
                  target="_blank"
                  className="menu__item"
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
    </header>
  );
}

export default Header;
