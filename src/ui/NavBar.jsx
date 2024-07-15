import { NavLink } from 'react-router-dom';
import LinkBtn from './LinkBtn';
import campFire3 from '../assets/lottiesAnimations/camp-fire-2.json';
import Lottie from 'lottie-react';

function NavBar() {
  return (
    <nav className="relative bg-primary-dark">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-10 py-4">
        <NavLink to={'/'}>
          <img className="w-12 lg:w-14" src="img/navLogo.svg" alt="" />
        </NavLink>

        <ul className="flex items-center gap-6">
          <LinkBtn to={'/'}>Home</LinkBtn>
          <Lottie
            className="h-10 w-10 opacity-50"
            animationData={campFire3}
            loop={true}
          />
          <LinkBtn to={'/'}>Our Values</LinkBtn>
          <Lottie
            className="h-10 w-10 opacity-50"
            animationData={campFire3}
            loop={true}
          />
          <LinkBtn to={'/'}>Events</LinkBtn>
          <Lottie
            className="h-10 w-10 opacity-50"
            animationData={campFire3}
            loop={true}
          />
          <LinkBtn to={'/'}>Shop</LinkBtn>
        </ul>
      </div>

      {/* <div className="absolute bottom-0 left-96 right-0 top-0 z-10 m-auto flex items-center gap-10">
        <Lottie
          className="h-16 w-16 opacity-5"
          animationData={campFire2}
          loop={true}
        />

        <Lottie
          className="h-16 w-16 opacity-5"
          animationData={campFire3}
          loop={true}
        />

        <Lottie
          className="h-16 w-16 opacity-50"
          animationData={campFire4}
          loop={true}
        />
      </div> */}
    </nav>
  );
}

export default NavBar;
