import React from 'react'
import './styles/servicesScreen.css'
import BackgroundImage from '../components/background-image/BackgroundImage'
import background_placeholder from '../assets/images/services_screen_background_placeholder.jpg'
import { A11y, Autoplay, EffectFade, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import BackgroundSwiper from '../components/background-swiper/BackgroundSwiper';
import { useState, useEffect } from 'react';

function ServicesScreen() {

  const [innerWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', function(event) {
        setWidth(this.window.innerWidth);
    }, true);
})


    const services=[
        {id:0, title: "Frontend"},
        {id:1, title: "Graphic Design"},
        {id:2, title: "Apps"},
        {id:3, title: "Photography"},
        {id:4, title: "Webdesign"},
        {id:5, title: "Videography"},
        {id:6, title: "VJ"}
    ];

  return (
    <div id='services' className='services-screen-container'>
        {/* <BackgroundImage image={background_placeholder} opacity={0.4} /> */}
        <BackgroundSwiper className='services-background-swiper' />
        <div className="services-content-container">
            <h2 className='services-title'>What I can do for you:</h2>
            {/* <ul className='services-list'>
                {services.map((service) => (
                    <li key={service.id} className='services-list-item'>{service.title}</li>
                ))}
            </ul> */}

            <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={setSlidesPerView(innerWidth)}
          className='services-swiper'
          >
            {services.map(item => (
              <SwiperSlide className={'service-swiper-slide swiper-no-swiping'}>
                {({ isActive }) => (
                    <p className={isActive ? 'active-service' : 'not-active-service'} key={item.id}>{item.title}</p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
    </div>
  )
}


export default ServicesScreen

function setSlidesPerView(innerWidth){
    console.log(innerWidth);
    if(innerWidth < 768){
        return "auto";
    } else if (innerWidth >= 1124){
        return 5;
    } else {
        return 3;
    }
  }