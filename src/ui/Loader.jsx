import Lottie from 'lottie-react';
import loaderAnimation from 'src/assets/lottiesAnimations/campi-loader2.json';

function Loader() {
  return (
    <div className="fixed right-0 top-0 z-[200] flex h-dvh w-dvw items-center justify-center bg-[#e2e2e2] bg-opacity-30">
      <Lottie className="w-[30%]" animationData={loaderAnimation} />
    </div>
  );
}

export default Loader;
