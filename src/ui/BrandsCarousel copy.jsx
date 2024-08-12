import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import AdidasLogo from 'src/assets/svgs/adidasLogo.svg';
import UnderArmourLogo from 'src/assets/svgs/underArmourLogo.svg';
import DecathlonLogo from 'src/assets/svgs/decathlonLogo.svg';
import NikeLogo from 'src/assets/svgs/nikeLogo.svg';

function BrandsCarousel() {
  const [testimonialsSwipper, set_testimonialsSwipper] = useState({});

  return (
    <div className="flex w-[55rem] items-center justify-center gap-8">
      <button onClick={() => testimonialsSwipper.slidePrev()}>
        <svg
          id="swipper-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37.737 37.737"
          className="hover:fill-secondaryDark fill-primary transition-all duration-75"
        >
          <path
            id="Path_520"
            data-name="Path 520"
            d="M20.868,2A18.868,18.868,0,1,1,2,20.868,18.89,18.89,0,0,1,20.868,2ZM12.274,22.438l11.321,7.547a1.886,1.886,0,0,0,2.934-1.57V13.321a1.887,1.887,0,0,0-2.932-1.57L12.276,19.3a1.887,1.887,0,0,0,0,3.14Z"
            transform="translate(-2 -2)"
          />
        </svg>
      </button>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onInit={(ev) => {
          set_testimonialsSwipper(ev);
        }}
        loop
        className="flex items-center"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img
            className="w-[6rem] max-w-[6rem]"
            src="src/assets/svgs/adidasLogo.svg"
            alt="adidasLogo"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <img
            className="w-[6rem] max-w-[6rem]"
            src="src/assets/svgs/underArmourLogo.svg"
            alt="underArmourLogo"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <img
            className="w-[6rem] max-w-[6rem]"
            src="src/assets/svgs/decathlonLogo.svg"
            alt="decathlonLogo"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <img
            className="w-[6rem] max-w-[6rem]"
            src="src/assets/svgs/nikeLogo.svg"
            alt="nikeLogo"
          />
        </SwiperSlide>
      </Swiper>

      <button onClick={() => testimonialsSwipper.slideNext()}>
        <svg
          id="swipper-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37.737 37.737"
          className="hover:fill-secondaryDark -scale-x-100 fill-primary transition-all duration-75"
        >
          <path
            id="Path_520"
            data-name="Path 520"
            d="M20.868,2A18.868,18.868,0,1,1,2,20.868,18.89,18.89,0,0,1,20.868,2ZM12.274,22.438l11.321,7.547a1.886,1.886,0,0,0,2.934-1.57V13.321a1.887,1.887,0,0,0-2.932-1.57L12.276,19.3a1.887,1.887,0,0,0,0,3.14Z"
            transform="translate(-2 -2)"
          />
        </svg>
      </button>
    </div>
  );
}

export default BrandsCarousel;
