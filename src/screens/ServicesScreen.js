import React from 'react'
import './styles/servicesScreen.css'
import BackgroundImage from '../components/background-image/BackgroundImage'
import background_placeholder from '../assets/images/services_screen_background_placeholder.jpg'

function ServicesScreen() {

    const services=[
        {id:0, title: "Frontend"},
        {id:1, title: "GraphicDesigner"},
        {id:2, title: "Apps"},
        {id:3, title: "Photographer"},
        {id:4, title: "Webdesign"},
        {id:5, title: "Freelancer"},
        {id:6, title: "VJ"},
        {id:7, title: "Filmmaker"}
    ];

  return (
    <div id='services' className='services-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.4} />
        <div className="services-content-container">
            <h2 className='services-title'>What I can do for you:</h2>
            <ul className='services-list'>
                {services.map((service) => (
                    <li key={service.id} className='services-list-item'>{service.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ServicesScreen