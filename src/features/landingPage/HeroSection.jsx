import Lottie from 'lottie-react';
import LinkBtn from 'src/ui/LinkBtn';

import campGuy from '../../assets/lottiesAnimations/camp-guy.json';
import campGuySm from '../../assets/lottiesAnimations/camp-guy-sm.json';
import scrollAnimation from '../../assets/lottiesAnimations/scrool.json';
import plantAnimation from '../../assets/lottiesAnimations/header-plants-2.json';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[100vh] max-h-[55rem] bg-primary-dark p-5 pt-10 sm:pt-5 lg:px-[10rem] lg:pr-0"
    >
      <div className="relative z-10 mx-auto hidden h-full max-w-[86rem] gap-8 lg:flex lg:items-center lg:justify-between">
        {/* left */}
        <div className="flex-1">
          <div className="mb-8 flex w-fit flex-1 flex-col">
            <h1 className="text-[6rem] font-bold leading-tight text-primary-light">
              Campi
            </h1>
            <p className="self-center text-[1rem] font-bold text-primary-light">
              A home away from home
            </p>
          </div>
          <p className="min-w-[20rem] text-[1rem] font-semibold text-primary-light">
            Discover the ultimate camping experience with us. Join exciting
            events and explore our e-shop for top-quality camping gear.we have
            everything you need to make your camping trips unforgettable.
          </p>

          <div className="mt-8">
            <LinkBtn to={'/'} type={'hero'} size={2}>
              Join us
            </LinkBtn>
          </div>
        </div>

        {/* right */}
        <div className="flex-[2]">
          <Lottie
            className="w-full max-w-[45rem]"
            animationData={campGuy}
            loop={true}
            autoPlay={true}
          />
        </div>
      </div>

      {/* small */}
      <div className="relative z-10 mx-auto flex h-full max-w-[86rem] flex-col items-center justify-start gap-8 pt-14 lg:hidden">
        {/* left */}
        <div className="relative z-10 flex max-w-[25rem] flex-col items-center justify-center px-4 sm:max-w-[25rem]">
          <div className="mb-8 flex w-fit flex-1 flex-col">
            <h1 className="text-[5rem] font-bold leading-tight text-primary-light sm:text-[6rem]">
              Campi
            </h1>
            <p className="self-center text-[1.1rem] font-bold text-primary-light">
              A home away from home
            </p>
          </div>
          <p className="font- text-center text-[1rem] text-primary-light">
            Discover the ultimate camping experience with us. Join exciting
            events and explore our e-shop for top-quality camping gear.we have
            everything you need to make your camping trips unforgettable.
          </p>

          <div className="mt-8">
            <LinkBtn to={'/'} type={'hero'} size={1}>
              Join us
            </LinkBtn>
          </div>
        </div>

        {/* right */}
        <div className="absolute bottom-4">
          <Lottie
            className="w-full max-w-[25rem]"
            animationData={campGuySm}
            loop={true}
            autoPlay={true}
          />
        </div>
      </div>
      {/* small */}

      <div className="absolute bottom-6 left-0 right-0 z-20 flex w-full justify-center">
        <a href="#">
          <Lottie
            className="w-[3rem]"
            animationData={scrollAnimation}
            loop={true}
            autoPlay={true}
          />
        </a>
      </div>

      <div className="absolute bottom-[-4rem] left-0 right-0 flex w-full justify-center md:bottom-[-12rem] lg:bottom-[-20vw] xlg:bottom-[-22rem]">
        <Lottie
          className="w-full max-w-[120rem]"
          animationData={plantAnimation}
          loop={true}
          autoPlay={true}
        />
      </div>
    </section>
  );
}

export default HeroSection;
