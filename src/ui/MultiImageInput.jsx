import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function MultiImageInput() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const uploadFiles = useRef();
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleUploadImagesClick = () => {
    uploadFiles.current.click();
  };

  const handleUploadImagesChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setImageFiles(fileArray);
    const imagesArray = fileArray.map((file) => ({
      url: URL.createObjectURL(file), // Create a URL for preview
      file,
    }));

    setImages(imagesArray);
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width > 830) {
        setSlidesPerView(4);
      } else if (width > 790) {
        setSlidesPerView(3);
      } else if (width > 300) {
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
    <div className="flex w-full flex-col items-center justify-center">
      <div
        onClick={handleUploadImagesClick}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-[1rem] border-[3px] border-dashed border-border-light px-4 py-5 transition-all hover:bg-bg-light sm:w-[60%]"
      >
        <img
          src="/img/uploadImgIcon.svg"
          alt="uploadImgIcon"
          className="w-[5.5rem]"
        />
        <span className="font-semibold">
          Select images or{' '}
          <span className="font-bold text-primary">browse</span>.
        </span>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center">
        <span className="text- font-semibold">
          {images.length} file(s) uploaded.
        </span>

        {images.length > 0 && (
          <div className="w-[16rem] max-w-[80dvw] sm:w-[25rem] md:w-[35rem]">
            <Swiper
              spaceBetween={20}
              slidesPerView={slidesPerView}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mt-6 h-[6rem] w-full cursor-grab rounded-[1rem]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full w-full select-none rounded-[1rem]">
                    <img
                      className="h-full w-full rounded-[1rem] object-cover"
                      // srcSet="/img/camp4.jpg 500w, /img/camp4.jpg 1000w"
                      sizes="(max-width: 600px) 500px, 1000px"
                      loading="lazy"
                      src={image.url}
                      alt="product img"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <input
          ref={uploadFiles}
          onChange={handleUploadImagesChange}
          multiple
          type="file"
          hidden
          accept="image/*"
        />

        {/* <div className="mt-4 flex w-full flex-wrap gap-4">
          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp1.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp2.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp3.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp4.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp5.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp6.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp7.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp8.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp9.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp10.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>

          <div className="h-[5rem] w-[7rem] rounded-[0.5rem]">
            <img
              src="/img/camp11.jpg"
              alt="camp"
              className="h-full w-full rounded-[0.5rem] object-cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MultiImageInput;
