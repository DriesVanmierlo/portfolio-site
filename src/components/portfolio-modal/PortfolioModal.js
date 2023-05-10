import React, { useState } from "react";
import './portfolioModal.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import PortfolioImageModal from '../portfolio-image-modal/PortfolioImageModal';

function PortfolioModal(props){

    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState();

    let isVideoproject = false;

    props.project.content?.forEach(item => {
        console.log(item);
        if(item.includes('vimeo')){
            isVideoproject = true;
        }
    });

    // const menuList = document.getElementsByClassName("nav-bar-list");
    // console.log(menuList)
    // menuList.onClick(() => props.closeModal(false))

    return(
        <div className='portfolio-modal-container'>
            <div className='portfolio-modal-content'>
                <div className="portfolio-modal-header">
                    <button className='portfolio-modal-back' onClick={()=> props.closeModal(false)}><span className='icon-down_arrow_small_icon portfolio-icon-back'></span> Back</button>
                    <h3 className='portfolio-modal-title'>{props.project.title}</h3>
                </div>
                <div className="portfolio-modal-swiper-description">
                    <div className="portfolio-modal-swiper-more">
                        <Swiper
                        modules={[A11y, Pagination, Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ dynamicBullets: true }}
                        className='portfolio-modal-swiper'>
                           { isVideoproject ? (props?.project.content?.slice(0).reverse().map(item => (
                            <SwiperSlide className='portfolio-modal-swiper-slide'>
                                {setContent(item, setOpenModal, setImage)}
                           </SwiperSlide>
                           ))) : (
                            props?.project.content?.map(item => (
                                <SwiperSlide className='portfolio-modal-swiper-slide'>
                                    {setContent(item, setOpenModal, setImage)}
                               </SwiperSlide>
                               ))
                           )}
                        </Swiper>
                        {setMoreButton(props.project)}
                    </div>
                <p className="portfolio-modal-description">{props.project.description}</p>
                </div>
            </div>
            {openModal && <PortfolioImageModal image={image} closeModal={setOpenModal} />}
        </div>
    )
}

function setContent (link, setOpenModal, setImage){
    if (link.includes('vimeo')) {
        return <iframe title="vimeo-player" className="portfolio-modal-iframe" src={link} width="100%" height="auto" frameBorder="0" allowFullScreen></iframe>
    } else {
        return <figure className="portfolio-modal-figure"><img className="portfolio-modal-image" onClick={() => {setOpenModal(true); setImage(link)}} src={link} alt="preview-project" />
        <span onClick={() => {setOpenModal(true); setImage(link)}} className="icon-maximize portfolio-modal-maximize"></span></figure>
    }
}

function setMoreButton(item){
    if(item.link.length > 0){
        return <a href={item.link} target="_blank" className='portfolio-modal-more' rel="noreferrer">See more <span className='icon-down_arrow_small_icon portfolio-icon-more'></span></a>;
    }
}

export default PortfolioModal;