import { useContext } from 'react';
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';

import { NavBarContext } from 'src/context/NavBarContext';
import BurgerBtn from './BurgerBtn';
import LinkBtn from './LinkBtn';
import campFire from '../assets/lottiesAnimations/camp-fire-2.json';
import {
  CollapsedNavBarChildVariants,
  CollapsedNavBarParentVariants,
} from 'src/utils/FramerMotionVariants';

function CollapsedNavBar() {
  const { isOpen } = useContext(NavBarContext);

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
          <motion.div
            className="absolute left-0 top-0 z-30 flex h-dvh w-full flex-col items-center justify-end"
            variants={CollapsedNavBarParentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="mt-[20%] flex h-[100vh] w-full flex-col items-center justify-center gap-10 overflow-y-auto overflow-x-hidden">
              <motion.div variants={CollapsedNavBarChildVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'home'}>
                  <span>Home</span>
                </LinkBtn>
              </motion.div>

              <motion.div variants={CollapsedNavBarChildVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'values'}>
                  Our Values
                </LinkBtn>
              </motion.div>

              <motion.div variants={CollapsedNavBarChildVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'events'}>
                  Events
                </LinkBtn>
              </motion.div>

              <motion.div variants={CollapsedNavBarChildVariants}>
                <LinkBtn type={'navBarLinkCollapsed'} to={'shop'}>
                  Shop
                </LinkBtn>
              </motion.div>

              <motion.div
                className="size-2 rounded-full bg-primary-light"
                variants={CollapsedNavBarChildVariants}
              ></motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={CollapsedNavBarChildVariants}
              >
                <LinkBtn type={'hero'} to={'/login'}>
                  <span className="w-[30rem]">Login</span>
                </LinkBtn>

                <Lottie
                  className="hidden size-20 xsm:block"
                  animationData={campFire}
                  loop={true}
                />

                <LinkBtn type={'hero'} to={'/signup'}>
                  Sign up
                </LinkBtn>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CollapsedNavBar;
