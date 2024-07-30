import { useEffect, useRef } from 'react';

function useClickOutside(onClick) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
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
