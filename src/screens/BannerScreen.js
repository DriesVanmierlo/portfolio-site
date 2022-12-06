import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/bannerScreen.css'
import background_placeholder from '../assets/images/banner_screen_background_placeholder.jpg'
import profilePicture from '../assets/images/profile_transparent.png'


function BannerScreen() {
  return (
    <div id='home' className='banner-screen-container'>
        <BackgroundImage className='banner-screen-background' image={background_placeholder} opacity={0.7} />
        <div className='banner-screen-content-container'>
            <div className='banner-vanmierlo'>Vanmierlo</div>
            <figure className='banner-figure'>
              <img className='banner-image' src={profilePicture} alt="Profielfoto Dries Vanmierlo" />
            </figure>
            <div className='banner-gradient'></div>
            <div className="banner-main-content">
              <div className='banner-lowerthird'>
                <div className='banner-dries'>Dries</div>
                <p className='banner-slogan'>A Creative Mind</p>
              </div>
              <span className="icon-down_arrow_small_icon banner-arrow"></span>
            </div>

        </div>
    </div>
  )
}

export default BannerScreen