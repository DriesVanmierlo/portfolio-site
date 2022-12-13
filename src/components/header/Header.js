import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/images/DV-logo-white.svg'

function Header() {

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
        }, true);
    })

  return (
    <header className='header'>
        <figure className='header-figure'>
            <img className='header-image' src={logo} alt="Dries Vanmierlo logo" />
        </figure>
        {setNavMenu(innerWidth)}
    </header>
  )
}

function closeMenu(){
    document.getElementById('menu__toggle').checked = false;
}

export default Header

function setNavMenu(width){
    if(width < 1024){
        return <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
            <span></span>
        </label>

        <nav className="menu__box" onClick={closeMenu}>
            <a exact activeClassName='menu__item-active' className="menu__item" href="#home">Home</a>
            <a className="menu__item" href="#about">About me</a>
            <a className="menu__item" href="#portfolio">Portfolio</a>
            <a className="menu__item" href="#contact">Contact</a>
            <div className='menu__socials_container'>
                <li><a target="_blank" className="menu__item" href="https://www.instagram.com/vanmierlodries/" rel="noreferrer"><span className='icon-instagram'></span></a></li>
                <li><a target="_blank" className="menu__item" href="https://www.facebook.com/dries.vanmierlo.94" rel="noreferrer"><span className='icon-facebook'></span></a></li>
                <li><a target="_blank" className="menu__item" href="https://www.linkedin.com/in/dries-vanmierlo" rel="noreferrer"><span className='icon-linkedin'></span></a></li>
            </div>
        </nav>
    </div>
    } else {
        return <nav className='nav-bar-list'>
        <a className="nav-bar-item" href='#home' >Home</a>
        <a className="nav-bar-item" href='#about' >About me</a>
        <a className="nav-bar-item" href='#portfolio' >Portfolio</a>
        <a className="nav-bar-item" href='#contact' >Contact</a>
        </nav>
    }
}