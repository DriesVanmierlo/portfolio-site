import React from 'react'
import BackgroundImage from '../background-image/BackgroundImage'
import './portfolioCarouselItem.css'
import background_placeholder from '../../assets/images/about_screen_background_placeholder.jpg'


function PortfolioCarouselItem(props) {
  return (
    <div className='portfolio-carousel-item'>
        <BackgroundImage image={background_placeholder} opacity={0.3} />
        <div className='carousel-item-content-container'>
            <h2 className='carousel-item-title' >Falsive Records Leuven</h2>
            <div className='carousel-item-service'>Photography</div>
        </div>
        <div className='carousel-item-more'>See more</div>
    </div>
  )
}

export default PortfolioCarouselItem