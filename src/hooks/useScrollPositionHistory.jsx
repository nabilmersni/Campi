import { useContext, useEffect, useRef, useState } from 'react';
import { NavBarContext } from 'src/context/NavBarContext';

function useScrollPositionHistory() {
  const { isOpen } = useContext(NavBarContext);
  const scrollPositionRef = useRef(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      scrollPositionRef.current = window.scrollY;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      setIsOpened(true);
    } else {
      // Allow scrolling
      document.body.style.overflow = '';
      // Restore the scroll position
      if (isOpened) window.scrollTo(0, scrollPositionRef.current);
      setIsOpened(false);
    }
  }, [isOpen, isOpened, setIsOpened]);

  return null;
}

export default useScrollPositionHistory;
