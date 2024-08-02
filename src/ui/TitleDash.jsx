import Lottie from 'lottie-react';
import usersAnimation from 'src/assets/lottiesAnimations/usersDash.json';

function TitleDash({ title, animation, children }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border-4 border-primary-light bg-white-light px-6 py-2 shadow-sm sm:justify-between">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <h1 className="text-nowrap text-xl font-bold text-primary sm:text-2xl">
          {title}
        </h1>
        {children}
      </div>

      {animation === 'users' && (
        <Lottie
          className="hidden w-14 sm:block"
          animationData={usersAnimation}
        />
      )}
    </div>
  );
}

export default TitleDash;
