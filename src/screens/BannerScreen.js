import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/bannerScreen.css'
import background_placeholder from '../assets/images/banner_screen_background_placeholder.jpg'

function BannerScreen() {
  return (
    <div className='banner-screen-container'>
        <BackgroundImage className='banner-screen-background' image={background_placeholder} opacity={0.7} />
    </div>
  )
}

export default BannerScreen