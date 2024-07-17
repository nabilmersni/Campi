import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import BurgerBtn from './BurgerBtn';

function CollapsedNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative z-50 cursor-pointer lg:hidden">
        <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* <div className="absolute left-[3.12rem] top-[1.05rem] z-10"> */}
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
      {/* </div> */}
    </div>
  );
}

export default CollapsedNavBar;
