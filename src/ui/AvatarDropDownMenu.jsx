import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ChevronIcon from 'src/assets/svgs/chevronIcon.svg';
import useClickOutside from 'src/hooks/useClickOutside';
import { AvatarDropDownVariants } from 'src/utils/FramerMotionVariants';

function AvatarDropDownMenu({ img, type = 'dash', isCenter = false }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const menuRef = useClickOutside(() => setIsDropDownOpen(false));

  return (
    <div className="relative">
      {/* toggle btn */}
      {type === 'dash' && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownOpen((isOpen) => !isOpen);
          }}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[.1rem] border-primary p-1 transition-all hover:bg-[#474576]"
        >
          <div className="size-12 rounded-full border-[.15rem] border-primary-light">
            <img
              src={img}
              alt="avatar"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div
            className={`w-4 fill-primary-light transition-all ${isDropDownOpen ? 'rotate-180' : ''}`}
          >
            <ChevronIcon />
          </div>
        </div>
      )}

      {type === 'userside' && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownOpen((isOpen) => !isOpen);
          }}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[.1rem] border-primary bg-primary-light p-1 px-2 transition-all hover:bg-[#D9D2FF]"
        >
          <div className="size-12 rounded-full border-[.15rem] border-primary">
            <img
              src={img}
              alt="avatar"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div
            className={`w-4 fill-primary-light transition-all ${isDropDownOpen ? 'rotate-180' : ''}`}
          >
            <div className="fill-primary stroke-primary stroke-[0.7px]">
              <ChevronIcon />
            </div>
          </div>
        </div>
      )}

      {/* toggle btn */}

      {/* dropdown element */}

      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            ref={menuRef}
            variants={AvatarDropDownVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            className={`absolute z-50 h-[16rem] w-[15rem] rounded-2xl border-2 border-primary bg-slate-100 p-2 shadow-md ${isCenter ? '-left-[76%] top-[4.5rem]' : 'right-0 top-[5rem]'}`}
          >
            content
          </motion.div>
        )}
      </AnimatePresence>

      {/* dropdown element */}
    </div>
  );
}

export default AvatarDropDownMenu;
