import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function GaloryCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width > 1300) {
        setSlidesPerView(7);
      } else if (width > 1200) {
        setSlidesPerView(6);
      } else if (width > 900) {
        setSlidesPerView(5);
      } else if (width > 600) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(2);
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
    <div className="flex h-fit w-full flex-col overflow-hidden">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper?.destroyed ? undefined : thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[30rem] w-full cursor-grab rounded-[2rem] shadow-sm"
      >
        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp4.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp6.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp5.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp8.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp9.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp10.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp11.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-[2rem]">
          <div className="h-full w-full rounded-[2rem]">
            <img
              className="h-full w-full rounded-[2rem] object-cover"
              src="/img/camp7.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-6 h-[6rem] w-full cursor-pointer rounded-[1rem]"
      >
        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp4.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp6.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp5.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp8.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp9.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp10.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp11.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full rounded-[1rem]">
            <img
              className="h-full w-full rounded-[1rem] object-cover"
              src="/img/camp7.jpg"
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default GaloryCarousel;
