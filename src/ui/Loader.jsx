import Lottie from 'lottie-react';
import loaderAnimation from 'src/assets/lottiesAnimations/campi-loader2.json';

function Loader() {
  return (
    <div className="fixed right-0 top-0 z-[200] flex h-dvh w-dvw items-center justify-center bg-[#4c4c4c] bg-opacity-40">
      <Lottie
        className="w-[40%] sm:w-[12rem]"
        animationData={loaderAnimation}
      />
    </div>
  );
}

export default Loader;
