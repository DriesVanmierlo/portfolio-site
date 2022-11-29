import React, { useEffect, useState } from 'react'
import './styles/portfolioScreen.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Scrollbar } from 'swiper';
import PortfolioCarouselItem from '../components/portfolio-carousel-item/PortfolioCarouselItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PortfolioModal from '../components/portfolio-modal/PortfolioModal';

function PortfolioScreen() {

  const [innerWidth, setWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState();



  const testArray = ["1", "2", "3"]

  useEffect(() => {
      window.addEventListener('resize', function(event) {
          setWidth(this.window.innerWidth);
      }, true);
  })


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
        <div className='portfolio-carousel'>
        <Swiper
          modules={[A11y, Pagination, Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView={setSlidesPerView(innerWidth)}
          // navigation
          slidesPerGroup={setSlidesPerGroup(innerWidth)}
          centeredSlides={setCentered(innerWidth)}
          scrollbar={{
            hide: true,
          }} >
            {testArray.map(item => (
              <SwiperSlide className='portfolio-swiper-slide' onClick={() => {setOpenModal(true); setProject(item)}}>
                <PortfolioCarouselItem data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {openModal && <PortfolioModal project={project} closeModal={setOpenModal} />}
    </div>
  )
}

export default PortfolioScreen

function setSlidesPerView(innerWidth){
  console.log(innerWidth);
  if(innerWidth < 768){
      return "auto";
  } else if (innerWidth >= 1024){
      return 4;
  } else {
      return 2;
  }
}

function setSlidesPerGroup(innerWidth){
  if(innerWidth < 768){
      return 1;
  } else if (innerWidth >= 1024){
      return 4;
  } else {
      return 2;
  }
}

function setCentered(innerWidth){
  if(innerWidth < 768){
      return true;
  } else {
      return false;
  }
}