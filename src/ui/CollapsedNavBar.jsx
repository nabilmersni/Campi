import { useContext } from 'react';
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';

import { NavBarContext } from 'src/context/NavBarContext';
import BurgerBtn from './BurgerBtn';
import LinkBtn from './LinkBtn';
import campFire from '../assets/lottiesAnimations/camp-fire-2.json';

function CollapsedNavBar() {
  const { isOpen } = useContext(NavBarContext);

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delay: 0.5,
      },
    },
    exit: {
      x: -30,
      opacity: 0,
      transition: {
        type: 'spring',
      },
    },
  };

  const childVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {},
    },
  };

  return (
    <div>
      <div className="relative z-50 cursor-pointer lg:hidden">
        <BurgerBtn />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-[4.5rem] top-[2.3rem] z-10 size-9 origin-center overflow-hidden rounded-full bg-primary"
            initial={{
              width: 40,
              height: 40,
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              width: '500rem',
              height: '500rem',
              x: '-50%',
              y: '-50%',
              borderRadius: ['50%', '40%', '30%', '0%'],
            }}
            transition={{
              duration: 3,
            }}
            exit={{
              width: 40,
              height: 40,
              x: '-50%',
              y: '-50%',
              borderRadius: '50%',

              transition: {
                duration: 0.6,
              },
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute left-0 top-0 z-30 flex h-dvh w-full flex-col items-center justify-end overflow-auto">
            <motion.ul
              className="mt-[20%] flex h-dvh flex-col items-center justify-center gap-10 overflow-auto"
              variants={parentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={childVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'/'}>
                  <span>Home</span>
                </LinkBtn>
              </motion.div>

              <motion.div variants={childVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'/'}>
                  Our Values
                </LinkBtn>
              </motion.div>

              <motion.div variants={childVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'/'}>
                  Events
                </LinkBtn>
              </motion.div>

              <motion.div variants={childVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'/'}>
                  Shop
                </LinkBtn>
              </motion.div>

              <div className="size-2 rounded-full bg-primary-light"></div>

              <div className="flex items-center gap-4">
                <LinkBtn type={'hero'} to={'/login'}>
                  Login
                </LinkBtn>

                <Lottie
                  className="size-20"
                  animationData={campFire}
                  loop={true}
                />

                <LinkBtn type={'hero'} to={'/signup'}>
                  Sign up
                </LinkBtn>
              </div>
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CollapsedNavBar;
