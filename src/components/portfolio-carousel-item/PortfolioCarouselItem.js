import React from 'react'
import BackgroundImage from '../background-image/BackgroundImage'
import './portfolioCarouselItem.css'


function PortfolioCarouselItem(props) {
  return (
    <div className='portfolio-carousel-item'>
        <BackgroundImage image={props.data.content[0]} opacity={0.3} />
        <div className='carousel-item-content-container'>
            <h2 className='carousel-item-title' >{props.data.title}</h2>
            <div className='carousel-item-service'>{props.data.service}</div>
        </div>
        <div className='carousel-item-more'>See more</div>
    </div>
  )
}

export default PortfolioCarouselItem