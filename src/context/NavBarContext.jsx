import { useAnimation } from 'framer-motion';
import { createContext, useRef, useState } from 'react';

export const NavBarContext = createContext();

function NavBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLogoControls = useAnimation();
  const burgerBtnRef = useRef();

  return (
    <NavBarContext.Provider
      value={{ isOpen, setIsOpen, navLogoControls, burgerBtnRef }}
    >
      {children}
    </NavBarContext.Provider>
  );
}

export default NavBarProvider;
