import Lottie from 'lottie-react';

import LinkBtn from './LinkBtn';
import campFireAnimation from '../assets/lottiesAnimations/camp-fire-2.json';
import CollapsedNavBar from './CollapsedNavBar';
import Logo from './Logo';

function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 h-[4.5rem] w-full bg-primary-dark">
      <div className="mx-auto flex h-full max-w-[86rem] items-center justify-between px-6">
        <Logo />

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

        <CollapsedNavBar />
      </div>
    </nav>
  );
}

export default NavBar;
