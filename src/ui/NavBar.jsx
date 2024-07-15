import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Lottie from 'lottie-react';

import LinkBtn from './LinkBtn';
import campFireAnimation from '../assets/lottiesAnimations/camp-fire-2.json';
import burgerBtnAnimation from '../assets/lottiesAnimations/burgerBtnAnimation.json';

function NavBar() {
  const burgerBtnRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerBtnClick = () => {
    if (burgerBtnRef.current) {
      if (!isOpen) {
        burgerBtnRef.current.playSegments([0, 98], true);
        setIsOpen(true);
      } else {
        burgerBtnRef.current.playSegments([141, 229], true);
        setIsOpen(false);
      }
    }
  };

  const handleBurgerLoop = () => {
    if (isOpen) burgerBtnRef.current.playSegments([98, 141], true);
  };

  return (
    <nav className="relative bg-primary-dark">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-6 py-4">
        <NavLink to={'/'} className="mr-auto">
          <img className="w-12 lg:w-14" src="img/navLogo.svg" alt="" />
        </NavLink>

        <div className="hidden items-center gap-14 lg:flex">
          <ul className="flex items-center gap-6">
            <LinkBtn type={'navBarLink'} to={'/'}>
              Home
            </LinkBtn>
            <Lottie
              className="h-10 w-10 opacity-50"
              animationData={campFireAnimation}
              loop={true}
            />
            <LinkBtn type={'navBarLink'} to={'/'}>
              Our Values
            </LinkBtn>
            <Lottie
              className="h-10 w-10 opacity-50"
              animationData={campFireAnimation}
              loop={true}
            />
            <LinkBtn type={'navBarLink'} to={'/'}>
              Events
            </LinkBtn>
            <Lottie
              className="h-10 w-10 opacity-50"
              animationData={campFireAnimation}
              loop={true}
            />
            <LinkBtn type={'navBarLink'} to={'/'}>
              Shop
            </LinkBtn>
          </ul>

          <span className="h-6 w-[.15rem] rounded-full bg-primary-light opacity-30"></span>

          <div className="flex items-center gap-4">
            <LinkBtn type={'navBarLoginLink'} to={'/login'}>
              Login
            </LinkBtn>

            <LinkBtn type={'hero'} to={'/signup'}>
              Sign up
            </LinkBtn>
          </div>
        </div>

        <div
          onClick={handleBurgerBtnClick}
          className="cursor-pointer lg:hidden"
        >
          <Lottie
            className="w-14"
            loop={false}
            animationData={burgerBtnAnimation}
            autoplay={false}
            lottieRef={burgerBtnRef}
            onComplete={handleBurgerLoop}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
