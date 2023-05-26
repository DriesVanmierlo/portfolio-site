import React from "react";
import Title from "./Title";
import ContentView from "./ContentView";
import { Swiper, SwiperSlide } from "swiper/react";
import content from "../data/content.json";
import { Navigation, A11y, Pagination, Mousewheel } from "swiper";
import ExplainerStep from "./ExplainerStep";

function Explainer() {
  return (
    <div className="section content-container" id="hoe-werkt-de-app">
      <ContentView>
        <Title>Hoe werkt de app?</Title>
        <Swiper
          modules={[A11y, Pagination, Navigation, Mousewheel]}
          mousewheel={true}
          slidesPerView="1"
          centeredSlides
          className="explainer-swiper-container"
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {content.explainerSteps.map((item) => (
            <SwiperSlide>
              <ExplainerStep step={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentView>
    </div>
  );
}

export default Explainer;
