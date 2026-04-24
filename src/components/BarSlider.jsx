import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

const images = [
  "/images/bar6.png",
  "/images/bar2.png",
  "/images/bar1.png",
  "/images/bar3.png",
  "/images/bar4.png",
  "/images/bar5.png",
  "/images/bar7.png",
];

const BarSlider = () => {
  return (
    <div style={{ width: " 50%", borderRadius: ".5vw", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={src} alt={`bar-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default BarSlider;
