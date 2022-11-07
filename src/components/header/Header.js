import React from 'react'
import './header.css'
import logo from '../../assets/images/DV-logo-white.svg'

function Header() {
  return (
    <header className='header'>
        <figure className='header-figure'>
            <img className='header-image' src={logo} alt="Dries Vanmierlo logo" />
        </figure>

        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <nav class="menu__box" onClick={closeMenu}>
                <a exact activeClassName='menu__item-active' className="menu__item" href="/">Home</a>
                <a className="menu__item" href="#about">About me</a>
                <a className="menu__item" href="/portfolio">Services</a>
                <a className="menu__item" href="/portfolio">Portfolio</a>
                <a className="menu__item" href="/contact">Contact</a>
                <div className='menu__socials_container'>
                    <li><a target="_blank" class="menu__item" href="https://www.instagram.com/vanmierlodries/"><span className='icon-instagram'></span></a></li>
                    <li><a target="_blank" class="menu__item" href="https://www.facebook.com/dries.vanmierlo.94"><span className='icon-facebook'></span></a></li>
                    <li><a target="_blank" class="menu__item" href="https://www.linkedin.com/company/dries-vanmierlo/"><span className='icon-linkedin'></span></a></li>
                </div>
            </nav>
        </div>

    </header>
  )
}

function closeMenu(){
    document.getElementById('menu__toggle').checked = false;
}

export default Header