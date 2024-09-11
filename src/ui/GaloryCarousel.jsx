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

function GaloryCarousel({ images }) {
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
        className="h-[26rem] w-full cursor-grab rounded-[2rem] shadow-sm sm:h-[30rem]"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="w-full rounded-[2rem]">
            <div className="h-full w-full rounded-[2rem]">
              <img
                className="h-full w-full rounded-[2rem] object-cover"
                src={image || '/img/camp4.jpg'}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
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
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="h-full w-full rounded-[1rem]">
              <img
                className="h-full w-full rounded-[1rem] object-cover"
                src={image || '/img/camp4.jpg'}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GaloryCarousel;
