import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import AdidasLogo from 'src/assets/svgs/adidasLogo.svg';
import UnderArmourLogo from 'src/assets/svgs/underArmourLogo.svg';
import DecathlonLogo from 'src/assets/svgs/decathlonLogo.svg';
import NikeLogo from 'src/assets/svgs/nikeLogo.svg';
import TheNorthFaceLogo from 'src/assets/svgs/theNorthFaceLogo.svg';

function BrandsCarousel() {
  const [PaginationSwipper, setPaginationSwipper] = useState({});
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setSlidesPerView(4);
      } else if (width > 900) {
        setSlidesPerView(3);
      } else if (width > 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    // Initial update
    updateSlidesPerView();

    // Update on window resize
    window.addEventListener('resize', updateSlidesPerView);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <div className="flex h-full w-fit max-w-[50rem] items-center justify-center gap-8 overflow-hidden px-4">
      <button onClick={() => PaginationSwipper.slidePrev()}>
        <svg
          id="swipper-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37.737 37.737"
          className="fill-border-light transition-all duration-75 hover:fill-primary"
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
        spaceBetween={30}
        slidesPerView={slidesPerView}
        onInit={(ev) => {
          setPaginationSwipper(ev);
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="flex h-full w-full cursor-grab"
      >
        <SwiperSlide className="flex h-full w-full items-center justify-center">
          <div className="flex w-[6rem] items-center justify-center">
            <AdidasLogo />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex h-full items-center justify-center">
          <div className="flex w-[6rem] items-center justify-center">
            <UnderArmourLogo />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex h-full items-center justify-center">
          <div className="flex h-full w-[9rem] items-center justify-center text-center">
            <DecathlonLogo />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex h-full items-center justify-center">
          <div className="flex h-full w-[8rem] items-center justify-center">
            <NikeLogo />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex h-full items-center justify-center">
          <div className="flex h-full w-[10rem] items-center justify-center">
            <TheNorthFaceLogo />
          </div>
        </SwiperSlide>
      </Swiper>

      <button onClick={() => PaginationSwipper.slideNext()}>
        <svg
          id="swipper-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37.737 37.737"
          className="-scale-x-100 fill-border-light transition-all duration-75 hover:fill-primary"
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
