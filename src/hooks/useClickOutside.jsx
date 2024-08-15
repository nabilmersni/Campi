import { useEffect, useRef } from 'react';

function useClickOutside(onClick) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        if (event.target.closest('.ignore-click-outside')) {
          return;
        }
        onClick?.();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [elementRef, onClick]);

  return elementRef;
}

export default useClickOutside;
