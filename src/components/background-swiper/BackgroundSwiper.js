import React from 'react'
import './backgroundSwiper.css'
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

function BackgroundSwiper() {
  return (
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        modules={[EffectFade, Autoplay]}
        className="background-swiper"
      >
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/pWhxH1H/steam-redesign-homepage.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/4ML9KTK/studentenagenda-ehb-22-23.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/FJGcKwq/Deliveroo-Home-Mockup.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/xgpw7Zt/falsive-records-leuven-dancing-crowd.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/SxhXTxv/kapsamazing-homepage.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/KFN2WFV/Bal-Tropical-2022-thumbnail.jpg" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className='background-swiper-figure'>
                <img className='background-swiper-image' src="https://i.ibb.co/GRtd7h3/Scania-vj.jpg" />
            </figure>
        </SwiperSlide>
      </Swiper>
  )
}

export default BackgroundSwiper