import React from 'react'
import './backgroundImage.css'

function BackgroundImage(props) {
  return (
    <div className='background-image-container'>
      <div className='background-image-adjustments' style={{opacity: props.opacity}}>
      </div>
        <figure className='background-image-figure'>
            <img className='background-image-image' src={props.image} alt="Dries aan het werk" />
        </figure>
    </div>
  )
}

export default BackgroundImage