import { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Lottie from 'lottie-react';

import campFire from '../assets/lottiesAnimations/camp-firee.json';
import campFire2 from '../assets/lottiesAnimations/camp-fire-2.json';
import { NavBarContext } from 'src/context/NavBarContext';
import { hideNavLogoVars } from 'src/utils/FramerMotionVariants';

function LinkBtn({ to, type, children, size = 1 }) {
  const lottieRef = useRef(null);
  const { setIsOpen, navLogoControls, burgerBtnRef } =
    useContext(NavBarContext);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  };

  if (type === 'navBarLink') {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ScrollLink
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={to === 'values' ? 250 : -110}
          duration={500}
          className="navLink relative z-20 w-16 cursor-pointer rounded-full font-bold text-slate-300 transition-all hover:text-[#fefdff]"
        >
          <span className="flex min-w-16 items-center justify-center">
            {children}
          </span>
        </ScrollLink>

        <Lottie
          className="navAnimation absolute bottom-0 left-0 right-0 top-0 z-10 m-auto h-16 w-16 origin-bottom opacity-0 transition-all duration-200"
          animationData={campFire}
          loop={true}
          autoPlay={false}
          lottieRef={lottieRef}
        />
      </li>
    );
  }

  if (type === 'navBarLinkCollapsed') {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ScrollLink
          to={to}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navLink relative z-20 w-16 rounded-full text-2xl font-bold text-slate-300 transition-all hover:text-[#fefdff]"
        >
          <span
            className="flex min-w-24 items-center justify-center"
            onClick={() => {
              setIsOpen(false);
              navLogoControls.start(hideNavLogoVars);
              burgerBtnRef.current.playSegments([98, 0], true);
            }}
          >
            {children}
          </span>
        </ScrollLink>

        <Lottie
          className="navAnimation absolute bottom-4 left-0 right-0 top-0 z-10 m-auto size-24 origin-bottom opacity-0 transition-all duration-200"
          animationData={campFire2}
          loop={true}
          autoPlay={false}
          lottieRef={lottieRef}
        />
      </li>
    );
  }

  if (type === 'footerLink') {
    return (
      <li
        className="relative w-fit self-center lg:self-start"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ScrollLink
          to={to}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navLink relative z-20 w-16 cursor-pointer rounded-full text-[1rem] font-bold text-slate-300 transition-all hover:text-[#fefdff]"
        >
          <span className="">{children}</span>
        </ScrollLink>

        <Lottie
          className="navAnimation absolute bottom-3 left-[-2.7rem] top-0 z-10 m-auto size-14 origin-bottom opacity-0 transition-all duration-200"
          animationData={campFire2}
          loop={true}
          autoPlay={false}
          lottieRef={lottieRef}
        />
      </li>
    );
  }

  if (type === 'navBarLoginLink') {
    return (
      <NavLink
        to={to}
        className="navLink relative z-20 w-16 rounded-full font-bold text-slate-300 transition-all hover:text-[#fefdff]"
      >
        {children}
      </NavLink>
    );
  }

  if (type === 'hero') {
    const sizeVarinats = {
      1: 'px-[1.5rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.4rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
    };

    return (
      <NavLink
        to={to}
        className={`rounded-full bg-primary-light ${sizeVarinats[size]} min-w-[7rem] text-center font-extrabold text-primary transition-all hover:bg-secondary`}
      >
        {children}
      </NavLink>
    );
  }

  if (type === 'primaryLight') {
    const sizeVarinats = {
      1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.4rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
      4: 'px-[1.1rem] py-[.4rem] text-[1rem]',
    };

    return (
      <NavLink
        to={to}
        className={`rounded-full bg-primary-light ${sizeVarinats[size]} text-center font-extrabold text-primary transition-all hover:bg-[#d3caff]`}
      >
        {children}
      </NavLink>
    );
  }

  if (type === 'primary') {
    const sizeVarinats = {
      1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.1rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
    };

    return (
      <NavLink
        to={to}
        className={`rounded-full bg-primary ${sizeVarinats[size]} text-center font-extrabold text-white transition-all hover:bg-[#8b7bcb]`}
      >
        {children}
      </NavLink>
    );
  }
}

export default LinkBtn;
