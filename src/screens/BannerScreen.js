import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/bannerScreen.css'

function BannerScreen() {
  return (
    <div className='banner-screen-container'>
        <BackgroundImage className='banner-screen-background' />
    </div>
  )
}

export default BannerScreen