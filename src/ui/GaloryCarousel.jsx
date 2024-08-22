import { useState } from 'react';
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

  return (
    <div className="flex h-fit w-full flex-col overflow-hidden">
      {thumbsSwiper ? (
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
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
      ) : (
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=""
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-tf1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
      )}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={7}
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
