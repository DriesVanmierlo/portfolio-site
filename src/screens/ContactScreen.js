import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/contactScreen.css'
import background_placeholder from '../assets/images/about_screen_background_placeholder.jpg'



function ContactScreen() {
  return (
    <div id='contact' className='contact-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.7} />
        <div className="contact-content-container">
        <div className='about-titles'>
                <h1 className='about-main-title'>Contact</h1>
                <div className='about-background-title'>Contact</div>
            </div>
        </div>
        
    </div>
  )
}

export default ContactScreen