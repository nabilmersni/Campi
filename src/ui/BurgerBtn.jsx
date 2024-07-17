import { useRef, useState } from 'react';

import burgerBtnAnimation from '../assets/lottiesAnimations/burgerBtnAnimation.json';
import Lottie from 'lottie-react';

function BurgerBtn({ isOpen, setIsOpen }) {
  const burgerBtnRef = useRef();
  const [isLoop, setIsLoop] = useState(false);

  const handleBurgerBtnClick = () => {
    setIsLoop(false);
    if (burgerBtnRef.current) {
      if (!isOpen) {
        burgerBtnRef.current.playSegments(
          [burgerBtnRef.current.animationItem.currentRawFrame, 98],
          true,
        );
        setIsOpen(true);
      } else {
        burgerBtnRef.current.playSegments(
          [
            !isLoop ? burgerBtnRef.current.animationItem.currentRawFrame : 98,
            0,
          ],
          true,
        );

        setIsOpen(false);
      }
    }
  };

  const handleBurgerLoop = () => {
    if (isOpen) burgerBtnRef.current.playSegments([98, 141], true);
    if (!isLoop) setIsLoop(true);
  };

  return (
    <Lottie
      onClick={handleBurgerBtnClick}
      className="w-11"
      loop={false}
      animationData={burgerBtnAnimation}
      autoplay={false}
      lottieRef={burgerBtnRef}
      onComplete={handleBurgerLoop}
    />
  );
}

export default BurgerBtn;
