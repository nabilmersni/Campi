import { useAnimation } from 'framer-motion';
import { createContext, useState } from 'react';

export const NavBarContext = createContext();

function NavBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLogoControls = useAnimation();

  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen, navLogoControls }}>
      {children}
    </NavBarContext.Provider>
  );
}

export default NavBarProvider;
