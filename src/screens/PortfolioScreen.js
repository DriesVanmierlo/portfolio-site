import React from 'react'
import './styles/portfolioScreen.css'

function PortfolioScreen() {
  return (
    <div className='portfolio-screen-container'>
        <div className="portfolio-titles-container">
            <div className='portfolio-titles'>
                <h1 className='portfolio-main-title'>Portfolio</h1>
                <div className='portfolio-background-title'>Portfolio</div>
            </div>
        </div>
        <select name="portfolio-filter" id="portfolio-filter">
            <option value="">All projects</option>
            <option value="">Frontend</option>
            <option value="">Graphic design</option>
            <option value="">Webdesign</option>
            <option value="">Video</option>
            <option value="">Photography</option>
            <option value="">VJ</option>
        </select>
    </div>
  )
}

export default PortfolioScreen