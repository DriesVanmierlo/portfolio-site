import React, { useEffect, useState } from 'react'
import './styles/portfolioScreen.css'
import projects from "../projects.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Scrollbar, Mousewheel } from 'swiper';
import PortfolioCarouselItem from '../components/portfolio-carousel-item/PortfolioCarouselItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import PortfolioModal from '../components/portfolio-modal/PortfolioModal';

function PortfolioScreen() {

  const [innerWidth, setWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState();
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
      window.addEventListener('resize', function(event) {
          setWidth(this.window.innerWidth);
      }, true);
  })

  const getCurrentFilter = () => {
    const value = document.getElementById('portfolio-filter').value

    if (value === "All Projects"){
      setFilteredProjects(projects)
    } else {
      const relevantProjects = projects.filter(project => project.service === value)
      setFilteredProjects(relevantProjects)
    }
  }

  return (
    <div id='portfolio' className='portfolio-screen-container'>
          <div className="portfolio-titles-container">
        <div className="portfolio-header">
              <div className='portfolio-titles'>
                  <h1 className='portfolio-main-title'>Portfolio</h1>
                  <div className='portfolio-background-title'>Portfolio</div>
              </div>
          <select name="portfolio-filter" id="portfolio-filter" onChange={getCurrentFilter}>
              <option value="All Projects">All projects</option>
              <option value="Frontend">Frontend</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Webdesign">Webdesign</option>
              <option value="Videography">Videography</option>
              <option value="Photography">Photography</option>
              <option value="VJ">VJ</option>
          </select>
          </div>
        </div>
        <div className='portfolio-carousel'>
        <Swiper
          modules={[A11y, Pagination, Navigation, Scrollbar, Mousewheel]}
          mousewheel={true}
          spaceBetween={20}
          slidesPerView={setSlidesPerView(innerWidth)}
          // navigation
          slidesPerGroup={setSlidesPerGroup(innerWidth)}
          centeredSlides={setCentered(innerWidth)}
          scrollbar={{
            hide: true,
            dragClass:"swiper-scrollbar-drag",
            dragSize: 75,
            draggable: true
          }} >
            {filteredProjects.map(item => (
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