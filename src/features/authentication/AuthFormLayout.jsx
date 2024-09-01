import Lottie from 'lottie-react';
import NavBar from 'src/ui/NavBar';
import AuthAnimation from '../../assets/lottiesAnimations/authAnimation.json';
import { Outlet } from 'react-router-dom';
import useScrollToTop from 'src/hooks/useScrollToTop';

function AuthFormLayout() {
  useScrollToTop();

  return (
    <div className="min-h-[100vh] bg-primary-light">
      <div className="mx-auto max-w-[85rem] pt-[1.5rem]">
        <NavBar />

        <div className="mt-24 flex flex-col-reverse items-center justify-evenly gap-4 md:flex-row lg:px-8">
          <Lottie animationData={AuthAnimation} className="flex-1" />

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthFormLayout;
