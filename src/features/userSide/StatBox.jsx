import Lottie from 'lottie-react';
import fireAnimation from 'src/assets/lottiesAnimations/camp-fire-cursor.json';

function StatBox({ num, detail }) {
  return (
    <div className="relative flex min-h-[10rem] flex-1 flex-col items-center justify-center rounded-[1rem] border-[4px] border-border-light bg-white bg-[url('/img/statBoxPattern.png')] bg-cover bg-center p-4">
      <h2 className="z-10 text-5xl font-bold text-primary sm:text-6xl">
        {num}
      </h2>
      <p className="z-10 text-nowrap font-bold text-black-light sm:text-xl">
        {detail}
      </p>

      <Lottie
        animationData={fireAnimation}
        loop={true}
        autoPlay={true}
        className="absolute bottom-0 left-0 right-0 top-0 z-0 mx-auto w-28 opacity-50"
      />
    </div>
  );
}

export default StatBox;
