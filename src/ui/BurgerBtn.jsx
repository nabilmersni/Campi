import { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import { NavBarContext } from 'src/context/NavBarContext';
import burgerBtnAnimation from '../assets/lottiesAnimations/burgerBtnAnimation.json';
import burgerBtnLightAnimation from '../assets/lottiesAnimations/burgerBtnLightAnimation.json';
import {
  hideNavLogoVars,
  showNavLogoVars,
} from 'src/utils/FramerMotionVariants';

function BurgerBtn({ color = 'dark' }) {
  // const burgerBtnRef = useRef();
  const [isLoop, setIsLoop] = useState(false);
  const { isOpen, setIsOpen, navLogoControls, burgerBtnRef } =
    useContext(NavBarContext);

  const handleBurgerBtnClick = () => {
    setIsLoop(false);
    if (burgerBtnRef.current) {
      if (!isOpen) {
        burgerBtnRef.current.playSegments(
          [burgerBtnRef.current.animationItem.currentRawFrame, 98],
          true,
        );
        setIsOpen(true);
        navLogoControls.start(showNavLogoVars);
      } else {
        burgerBtnRef.current.playSegments(
          [
            !isLoop ? burgerBtnRef.current.animationItem.currentRawFrame : 98,
            0,
          ],
          true,
        );
        setIsOpen(false);
        navLogoControls.start(hideNavLogoVars);
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
      className="w-11 cursor-pointer"
      loop={false}
      animationData={
        color === 'dark' ? burgerBtnAnimation : burgerBtnLightAnimation
      }
      autoplay={false}
      lottieRef={burgerBtnRef}
      onComplete={handleBurgerLoop}
    />
  );
}

export default BurgerBtn;
