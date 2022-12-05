import React from 'react'
import BackgroundImage from '../components/background-image/BackgroundImage'
import './styles/contactScreen.css'
import background_placeholder from '../assets/images/about_screen_background_placeholder.jpg'



function ContactScreen() {
  return (
    <div id='contact' className='contact-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.7} />
        <div className="contact-content-container">
          <div className='contact-titles'>
            <h1 className='contact-main-title'>Contact</h1>
            <div className='contact-background-title'>Contact</div>
          </div>
          <h2 className='contact-information-title'>Contact information</h2>
          <p className='contact-email'>dries.vanmierlo@telenet.be</p>
          <p className='contact-phone'>+32 470 63 75 28</p>
          <div className='contact-socials-container'>
            <a target="_blank" className="contact-social-icon" href="https://www.instagram.com/vanmierlodries/" rel="noreferrer"><span className='icon-instagram'></span></a>
            <a target="_blank" className="contact-social-icon" href="https://www.facebook.com/dries.vanmierlo.94" rel="noreferrer"><span className='icon-facebook'></span></a>
            <a target="_blank" className="contact-social-icon" href="https://www.linkedin.com/company/dries-vanmierlo/" rel="noreferrer"><span className='icon-linkedin'></span></a>
          </div>
          <form>
            <div className="contact-form-row">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input required type="text" id='name' name='name' />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input required type="text" id='email' name='email' />
              </div>
            </div>
            <div className="contact-form-row">
              <div className="input-container">
                <label htmlFor="subject">Subject</label>
                <input required type="text" id='subject' name='subject' />
              </div>
            </div>
            <div className="message-container input-container">
                <label htmlFor="message">Message</label>
                <textarea className="contact-message" rows={4} required type="text" id='message' name='message' />
            </div>
            <button className="white-button" id="contact-submit">Send <span className='icon-right_arrow_big_icon icon-contact'></span></button>
          </form>
        </div>
    </div>
  )
}

export default ContactScreen