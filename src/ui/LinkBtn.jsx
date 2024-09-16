import { useContext, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Lottie from 'lottie-react';

import campFire from '../assets/lottiesAnimations/camp-firee.json';
import campFire2 from '../assets/lottiesAnimations/camp-fire-2.json';
import { NavBarContext } from 'src/context/NavBarContext';
import { hideNavLogoVars } from 'src/utils/FramerMotionVariants';

import DashIcon from 'src/assets/svgs/dash-icon.svg';
import UsersIcon from 'src/assets/svgs/users-icon.svg';
import EventsIcon from 'src/assets/svgs/events-icon.svg';
import ShopIcon from 'src/assets/svgs/shop-icon.svg';
import OrderDashIcon from 'src/assets/svgs/orderDashIcon.svg';
import ReservationIcon from 'src/assets/svgs/reservationDashIcon.svg';

import { DashboardContext } from 'src/context/DashboardContext';

function LinkBtn({
  to,
  type = 'navBarLink',
  children,
  size = 1,
  isCollapsed = false,
  sidebarIcon = 'dash',
}) {
  const lottieRef = useRef(null);
  const { setIsOpen, navLogoControls, burgerBtnRef } =
    useContext(NavBarContext);

  const { isSidebarCollapsed } = useContext(DashboardContext);

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClick = (event) => {
    const targetElement = document.getElementById(to);
    navigate('/');

    if (!targetElement) {
      event.preventDefault();
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
          offset={to === 'values' ? 180 : -110}
          duration={500}
          onClick={handleClick}
          className="navLink text-slate-300 relative z-20 w-16 cursor-pointer rounded-full font-bold transition-all hover:text-[#fefdff]"
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
          onClick={handleClick}
          className="navLink text-slate-300 relative z-20 w-16 rounded-full text-2xl font-bold transition-all hover:text-[#fefdff]"
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
          className="navLink text-slate-300 relative z-20 w-16 cursor-pointer rounded-full text-[1rem] font-bold transition-all hover:text-[#fefdff]"
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
        className="navLink text-slate-300 relative z-20 w-16 rounded-full font-bold transition-all hover:text-[#fefdff]"
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

    const startAnimation = () => {
      return new Promise((resolve) => {
        navLogoControls.start(hideNavLogoVars).then(() => {
          resolve();
        });
      });
    };

    const playBurgerAnimation = () => {
      return new Promise((resolve) => {
        burgerBtnRef.current.playSegments([98, 0], true);
        resolve(); // Resolve immediately as there's no callback from playSegments
      });
    };

    return isCollapsed ? (
      <NavLink
        to={to}
        className={`rounded-full bg-primary-light ${sizeVarinats[size]} min-w-[7rem] text-center font-extrabold text-primary transition-all hover:bg-secondary`}
        onClick={() => {
          setIsOpen(false);

          Promise.all([startAnimation(), playBurgerAnimation()]).then(() => {
            navigate(to);
          });
        }}
      >
        {children}
      </NavLink>
    ) : (
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

  if (type === 'formLink') {
    const sizeVarinats = {
      1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.1rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
    };

    return (
      <Link
        to={to}
        className={`rounded-full ${sizeVarinats[size]} text-nowrap text-center font-semibold text-[#8b7bcb] transition-all hover:text-primary`}
      >
        {children}
      </Link>
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

  if (type === 'sidebarNavLink') {
    const getClassName = () => {
      const isExactActive = location.pathname === to;
      return `flex items-center gap-[0.6rem] rounded-lg transition-all hover:bg-[#474576] ${
        isSidebarCollapsed ? 'justify-center p-1' : 'h-[3.7rem] p-4'
      } ${isExactActive ? 'bg-primary-light fill-primary-dark text-primary-dark hover:bg-primary-light' : 'fill-primary-light text-primary-light'}`;
    };

    return (
      <li className="w-full">
        <NavLink className={getClassName} to={to}>
          <div
            className={` ${isSidebarCollapsed ? 'flex size-9 items-center justify-center' : 'size-9'} `}
          >
            {sidebarIcon === 'dash' ? <DashIcon /> : ''}
            {sidebarIcon === 'users' ? <UsersIcon /> : ''}
            {sidebarIcon === 'events' ? <EventsIcon /> : ''}
            {sidebarIcon === 'shop' ? <ShopIcon /> : ''}

            {sidebarIcon === 'orders' ? (
              <div className="ml-[0.2rem] mt-[0.2rem] size-7">
                <OrderDashIcon />
              </div>
            ) : (
              ''
            )}

            {sidebarIcon === 'reservations' ? (
              <div className="ml-[0.2rem] mt-[0.2rem] size-[1.55rem]">
                <ReservationIcon />
              </div>
            ) : (
              ''
            )}
          </div>

          {!isSidebarCollapsed && (
            <span className="font-semibold">{children}</span>
          )}
        </NavLink>
      </li>
    );
  }

  if (type === 'userSideNavbarLink') {
    const getClassName = () => {
      const isExactActive = location.pathname === to;
      return `text-nowrap w-full h-full cursor-pointer rounded-xl  px-5 py-2 font-bold text-primary transition-all hover:bg-primary-light active:bg-[#D9D2FF] ${isExactActive ? 'bg-primary-light' : ''}`;
    };
    return (
      <NavLink
        className={getClassName()}
        to={to}
        onClick={() => {
          setIsOpen(false);
          burgerBtnRef.current.playSegments([98, 0], true);
        }}
      >
        {children}
      </NavLink>
    );
  }

  if (type === 'userSideNavbarLink2') {
    const getClassName = () => {
      const isExactActive = location.pathname === to;
      return `text-nowrap w-full h-full cursor-pointer rounded-xl  px-5 py-2 font-bold text-primary border-[2px] border-[#D9D2FF] text-center transition-all hover:bg-primary-light active:bg-[#D9D2FF] ${isExactActive ? 'bg-primary-light' : ''}`;
    };
    return (
      <NavLink
        className={getClassName()}
        to={to}
        onClick={() => {
          setIsOpen(false);
          burgerBtnRef.current.playSegments([98, 0], true);
        }}
      >
        {children}
      </NavLink>
    );
  }

  if (type === 'iconLinkBtn') {
    return (
      <Link
        to={to}
        className="flex size-10 items-center justify-center rounded-full bg-primary-light fill-primary p-[.5rem] transition-all hover:bg-[#D9D2FF] active:bg-[#d0c8ff]"
        onClick={() => {
          setIsOpen(false);
          burgerBtnRef.current.playSegments([98, 0], true);
        }}
      >
        {children}
      </Link>
    );
  }
}

export default LinkBtn;
