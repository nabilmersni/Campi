import AvatarDropDownMenu from 'src/ui/AvatarDropDownMenu';
import LinkBtn from 'src/ui/LinkBtn';
import MessengerIcon from 'src/assets/svgs/messengerIcon.svg';
import NotifIcon from 'src/assets/svgs/notifIcon.svg';
import ShopIcon from 'src/assets/svgs/shopIcon.svg';
import BurgerBtn from 'src/ui/BurgerBtn';
import { useContext, useEffect, useState } from 'react';
import { NavBarContext } from 'src/context/NavBarContext';
import { AnimatePresence, motion } from 'framer-motion';

function UserSideNavBar() {
  const { isOpen, setIsOpen, burgerBtnRef } = useContext(NavBarContext);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleScreenResize = () => {
      setIsOpen(false);
      burgerBtnRef.current.playSegments([1, 0], true);
    };

    handleScreenResize(mediaQuery);

    mediaQuery.addEventListener('change', handleScreenResize);

    return () => mediaQuery.removeEventListener('change', handleScreenResize);
  }, [setIsOpen, burgerBtnRef]);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsScrollable(true);
      }, 500); // 0.5s delay
      return () => clearTimeout(timeout);
    } else {
      setIsScrollable(false);
    }
  }, [isOpen]);

  return (
    <nav className="relative flex min-h-[5.3rem] w-full max-w-[80rem] items-center justify-between rounded-[1rem] bg-white px-7 py-2">
      <img className="z-40 w-16" src="/img/logouser.svg" alt="logo" />
      <ul className="z-40 hidden items-center gap-3 lg:flex">
        <LinkBtn type="userSideNavbarLink" to={'/userside'}>
          Home
        </LinkBtn>

        <LinkBtn type="userSideNavbarLink" to={'/userside/events'}>
          Events
        </LinkBtn>

        <LinkBtn type="userSideNavbarLink" to={'/userside/shop'}>
          Shop
        </LinkBtn>
      </ul>

      <div className="z-40 flex flex-row-reverse items-center gap-4">
        <div className="lg:hidden">
          <BurgerBtn color="light" />
        </div>

        <div className="hidden flex-row-reverse items-center gap-4 lg:flex">
          <AvatarDropDownMenu img={'/img/avatar2.png'} type="userside" />
          <div className="mr-10 size-2 rounded-full bg-primary-light"></div>

          <div className="flex flex-row-reverse items-center gap-3">
            <LinkBtn to={''} type="iconLinkBtn">
              <NotifIcon />
            </LinkBtn>

            <LinkBtn to={''} type="iconLinkBtn">
              <MessengerIcon />
            </LinkBtn>

            <LinkBtn to={'/userside/cart'} type="iconLinkBtn">
              <div className="w-[1.28rem] stroke-primary stroke-[.2px]">
                <ShopIcon />
              </div>
            </LinkBtn>
          </div>

          <div className="h-6 w-1 rounded-full bg-primary-light"></div>
        </div>
      </div>

      {/* collapsedNav */}
      <div
        className={`absolute left-0 right-0 top-0 z-30 mx-auto flex min-h-[5.3rem] w-full max-w-[85rem] flex-col items-center rounded-[1rem] border-[.25rem] border-primary bg-white shadow-sm transition-all duration-500 ${
          isOpen ? 'h-nav-height' : 'h-[1rem]'
        } ${isScrollable ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
      >
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col items-center justify-center gap-12 pt-28">
              <motion.div
                className="flex flex-col items-center gap-4"
                initial={{
                  x: -30,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: 'spring',
                    damping: 15,
                  },
                }}
              >
                <AvatarDropDownMenu
                  isCenter={true}
                  img={'/img/avatar2.png'}
                  type="userside"
                />
                <div className="h-1 w-6 rounded-full bg-primary-light"></div>

                <div className="flex flex-row-reverse items-center gap-3">
                  <LinkBtn to={''} type="iconLinkBtn">
                    <NotifIcon />
                  </LinkBtn>

                  <LinkBtn to={''} type="iconLinkBtn">
                    <MessengerIcon />
                  </LinkBtn>

                  <LinkBtn to={'/userside/cart'} type="iconLinkBtn">
                    <div className="w-[1.28rem] stroke-primary stroke-[.2px]">
                      <ShopIcon />
                    </div>
                  </LinkBtn>
                </div>
              </motion.div>

              <motion.ul
                className="z-40 flex flex-col items-center gap-3"
                initial={{
                  x: -30,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    type: 'spring',
                    damping: 15,
                  },
                }}
              >
                <LinkBtn type="userSideNavbarLink" to={'/userside'}>
                  Home
                </LinkBtn>

                <LinkBtn type="userSideNavbarLink" to={'/userside/events'}>
                  Events
                </LinkBtn>

                <LinkBtn type="userSideNavbarLink" to={'/userside/shop'}>
                  Shop
                </LinkBtn>
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>
      {/* collapsedNav */}
    </nav>
  );
}

export default UserSideNavBar;
