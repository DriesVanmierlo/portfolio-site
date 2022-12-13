import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/bannerScreen.css'
import background_placeholder from '../assets/images/banner_screen_background_placeholder.jpg'
import profilePicture from '../assets/images/profile_transparent.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { ScrollParallax } from "react-just-parallax"



function BannerScreen() {
  return (
      <MouseParallaxContainer>
    <div id='home' className='banner-screen-container'>

        {/* <BackgroundImage className='banner-screen-background' image={background_placeholder} opacity={0.7} /> */}
        <video src="https://res.cloudinary.com/dijwniqzx/video/upload/v1670943816/Hero-Movie-V1_frm2tw.mp4" autoPlay muted loop className="hero-video" type="video/mp4"/>
        <div className='banner-screen-content-container'>
            <ScrollParallax>
            <div className='banner-vanmierlo'>Vanmierlo</div>
            </ScrollParallax>
            {/* <figure className='banner-figure'>
              <img className='banner-image' src={profilePicture} alt="Profielfoto Dries Vanmierlo" />
            </figure> */}
            <div className='banner-gradient'></div>
            <div className="banner-main-content">
              <div className='banner-lowerthird'>
            <ScrollParallax>

              <MouseParallaxChild factorX={0.03} factorY={0.03} >
                <div className='banner-dries'>Dries</div>
              </MouseParallaxChild>
            </ScrollParallax>

                <p className='banner-slogan'>A Creative Mind</p>
              </div>
              <span className="icon-down_arrow_small_icon banner-arrow"></span>
            </div>

        </div>
    </div>
    </MouseParallaxContainer>
  )
}

export default BannerScreen