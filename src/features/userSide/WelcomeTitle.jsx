import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import campAnimation from 'src/assets/lottiesAnimations/camp-guy-light.json';

function WelcomeTitle() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[1rem] border-[4px] border-border-light bg-white px-8 py-4 md:flex-row md:gap-0">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <h1 className="text-center text-xl font-bold text-primary sm:text-3xl">
          Hi <span className="capitalize">{currentUser.fullname}</span>, Welcome
          to Campi
        </h1>
        <p className="font-semibold text-black-light sm:text-lg">
          A home away from Home
        </p>
      </div>

      <div className="w-[9rem]">
        <Lottie animationData={campAnimation} />
      </div>
    </div>
  );
}

export default WelcomeTitle;
